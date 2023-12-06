const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const flash = require("express-flash");
const FileStore = require("session-file-store")(session);
const path = require("path");
const os = require("os");

const port = 3333

// Inicializa o express
const app = express();

const connection = require("./db/conn");

// Import Models
const User = require("./models/User");
const Bedrooms = require("./models/Bedrooms")

// Import Routers
const losRouters = require("./routers/losRouters");

// Configurando o handlebars
const hbs = handlebars.create({
  partialsDir: ["views/partials"],
  helpers: {
    /**
     * Este helper foi criado para converter os valores que estavam sendo emitidos
     * e exibi-los num formato JSON.
     */
    json: (context) => JSON.stringify(context, null, 2),
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Configurando o envio de dados
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configurando a sessão do usuário
app.use(
  session({
    name: "session",
    secret: "SenhaForte",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: () => {},
      path: path.join(os.tmpdir(), "session"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// Para usar arquivos estáticos
app.use(express.static("public"));

app.use((request, response, next) => {
  if (request.session.userId) {
    return (response.locals.session = request.session);
  }

  next();
});

// Utilizando rotas
app.use('/', losRouters);

// Conexão com o banco de dados
connection
  .sync()
  .then(() => {
    app.listen(port, ()=>{
      console.log(`http://localhost:${port}`)
    });
  })
  .catch((error) => console.error(error));

