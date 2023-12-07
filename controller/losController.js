const User = require("../models/User");

// LosController.js

class LosController {
   static async register(req, res) {
      const { name, emailouCpf, telefone, data, horaEscolhida } = req.body;
      let user;
      try {
         // Converta a string da data para um objeto Date
         const dataObj = new Date(`${data} ${horaEscolhida}`);
         
         // const nome = name
         // const emailouCpf = emailouCpf
         // const telefone = telefone

         // if(nome === ''){
         //    console.error("erro");
         //    return res.status(400).send('name erro');
         // }
         // if(telefone === ''){
         //    console.error("erro");
         //    return res.status(400).send(' telefone erro');
         // }
         // if(emailouCpf === ''){
         //    console.error("erro");
         //    return res.status(400).send('email ou cpf erro');
         // }


         if (!isNaN(dataObj.getTime())) {
            // Se for válida, crie o usuário
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
            return res.status(400).send("erro");
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
   static async showHome(req, res) {
      return res.render("home");
   }

   static async showCalendar(req, res) {
      return res.render("calendar");
   }

   static async showReserva(req, res) {
      return res.render("reserva");
   }


   static async showBusca(req, res) {
      return res.render("busca");
   }
}

module.exports = LosController;
