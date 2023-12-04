const express = require("express");
const router = express.Router();

const LosController = require("../controller/losController");

router.get('/', LosController.showHome)
router.get('/calendar', LosController.showCalendar)
router.get('/reserva', LosController.showReserva)
router.post("/register", LosController.register);
// router.get('/', (req, res) => {
//     return res.render('home')
// })
// router.get('/calendar', (req, res) => {
//     return res.render('calendar')
// })
// router.get('/reserva', (req, res) => {
//     return res.render('reserva')
// })

module.exports = router;