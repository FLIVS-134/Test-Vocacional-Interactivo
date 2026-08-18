const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

const PORT = 3000;


// Permitir recibir datos JSON
app.use(express.json());


// Permitir recibir datos de formularios
app.use(express.urlencoded({
    extended: true
}));


// Sesiones
app.use(session({
    secret: "test-vocacional-secreto",
    resave: false,
    saveUninitialized: false
}));


// Archivos públicos
app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// Rutas de autenticación
const authRoutes =
    require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const adminRoutes =
    require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);


// Iniciar servidor
app.listen(PORT, () => {

    console.log(
        `Servidor funcionando en http://localhost:${PORT}`
    );

});