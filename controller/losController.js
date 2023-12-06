const User = require("../models/User");
const Bedrooms = require("../models/Bedrooms")

module.exports = class LosController {
    static async register(request, response) {
        const { name, emailouCpf, cell, nmQuarto } = request.body;
        const user = {
            name,
            emailouCpf,
            cell
        };
        const badroom = {
            nmQuarto
        }
        const createBadrrom = await Bedrooms.create(badroom)
        const createUser = await User.create(user);
        createBadrrom
        createUser
        response.redirect("/");
    }
    static async showHome(request, response) {
        return response.render("home");
    }
    static async showCalendar(request, response) {
        return response.render("calendar");
    }
    static async showReserva(request, response) {
        return response.render("reserva");
    }
    static async showReservado(request, response) {
        return response.render("reservado");
    }
    static async showBusca(request, response) {
        return response.render("busca");
    }
};
