const express = require('express')

const exphbs = require('express-handlebars')

const port = 3000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    return res.render('home')
})
app.get('/calendar', (req, res) =>{
    return res.render('calendar')
})
app.get('/reserva', (req, res) =>{
    return res.render('reserva')
})

app.listen(port, () =>{
    console.log(`Servidor Los Hotel rodandoo http://localhost:${port}`)
})
