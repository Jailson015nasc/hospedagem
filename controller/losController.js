const User = require("../models/User");
const Imagem = require("../models/Imagem");
const { Op } = require("sequelize");
// LosController.js

class LosController {
   static async register(req, res) {
      const { name, emailouCpf, telefone, data, horaEscolhida, suiteEscolhida, precoEscolhida } = req.body;
      let user;

      try {
         const dataObj = new Date(`${data} ${horaEscolhida}`);
         if (!isNaN(dataObj.getTime())) {
            user = {
               name,
               emailouCpf,
               telefone,
               data: dataObj,
               horaEscolhida,
               suiteEscolhida,
               precoEscolhida,

            };

            const createUser = await User.create(user);
            console.log('Dados inseridos:', createUser.toJSON());
            return res.redirect("/reservado");
         } else {
            console.error("erro");
            const errorMessage =
               `<body style="background-color: red; display: flex; align-items: center; height: 100vh; justify-content: center; flex-direction: column;" class="img">
              <div  style="display: flex;">
                  <a href="/reserva">
                  <img style="border-radius: 50%;"src="/img/erro.jpg" alt="" width="700px" height="700px">
                  </a>
              </div>
              </body>
                  `;
            return res.status(400).send(errorMessage);
         }
      } catch (error) {
         console.error(error);
         return res.status(500).send("Erro ao criar usuário.");
      }
   }

   static async showReservado(req, res) {
      try {
         const users = await User.findAll({ raw: true });
         console.log('Dados retornados:', users);

         if (!users || users.length === 0) {
            console.error('Nenhum usuário encontrado.');
            return res.render("reservado", { users: [], imagensSuites: [] });
         }

         const ultimaReserva = users[users.length - 1];
         const suiteEscolhidaa = ultimaReserva.suiteEscolhida;

         console.log('Suíte escolhida:', suiteEscolhidaa);

         // Encontra as imagens correspondentes na tabela Imagem
         const imagensSuites = await Imagem.findAll({
            where: {
               nome: suiteEscolhidaa
            },
         });
         console.log('Imagens encontradas:', imagensSuites);

         // Se não houver imagens no banco de dados, insira as 15 imagens
         if (imagensSuites.length === 0) {
            const caminhos = [
               "/public/img/suite1.jpg",
            ];
            // Itera sobre os caminhos e insere no banco de dados
            for (const caminho of caminhos) {
               await Imagem.create({
                  nome: suiteEscolhidaa,
                  caminho: caminho,
               });
            }

            // Recupera as imagens novamente após a inserção
            const imagensInseridas = await Imagem.findAll({
               where: {
                  nome: suiteEscolhidaa
               },
               raw: true
            });

            console.log('Imagens inseridas:', imagensInseridas);


            return res.render("reservado", { users, imagensSuites: imagensInseridas });
         }

         return res.render("reservado", { users, imagensSuites });
      } catch (error) {
         console.error('Erro ao recuperar usuários:', error);
         return res.status(500).send("Erro ao recuperar usuários.");
      }
   }

   
   static async showBusca(req, res) {
      const { query } = req.query;

      try {
         const clientesEncontrados = await User.findAll({
            where: {
               [Op.or]: [
                  { name: { [Op.like]: `%${query}%` } },
                  { emailouCpf: { [Op.like]: `%${query}%` } },
                  { telefone: { [Op.like]: `%${query}%` } },
                  // Adicione mais condições de busca conforme necessário
               ],
            },
         });

         res.render('busca', { clientesEncontrados, query });
      } catch (error) {
         console.error('Erro ao buscar clientes:', error);
         res.status(500).send('Erro interno do servidor');
      }
   }


   static async showHome(req, res) {
      return res.render("home");
   }

   static async showCalendar(req, res) {
      return res.render("calendar");
   }

   static async showReserva(req, res) {
      return res.render("reserva");
   }
}

module.exports = LosController;
