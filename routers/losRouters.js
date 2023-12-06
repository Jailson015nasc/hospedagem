const express = require("express");
const router = express.Router();

const LosController = require("../controller/losController");

router.get('/', LosController.showHome)
router.get('/calendar', LosController.showCalendar)
router.get('/reserva', LosController.showReserva)
router.get('/reservado', LosController.showReservado)
router.get('/busca', LosController.showBusca)
router.post('/register', LosController.register);


module.exports = router;