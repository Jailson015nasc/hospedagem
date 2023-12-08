const User = require("../models/User");

// LosController.js

class LosController {
   static async register(req, res) {
      const { name, emailouCpf, telefone, data, horaEscolhida } = req.body;
      let user;
      try {
         
         const dataObj = new Date(`${data} ${horaEscolhida}`);
         if (!isNaN(dataObj.getTime())) {

            user = {
               name,
               emailouCpf,
               telefone,
               data: dataObj,
               horaEscolhida
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
         return res.render("reservado", { users });
      } catch (error) {
         console.error(error);
         return res.status(500).send("Erro ao recuperar usuários.");
      }
   }
   static async showBusca(req, res) {
      return res.render("busca");
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
