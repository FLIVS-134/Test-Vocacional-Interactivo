const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_vocacional"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error al conectar con MySQL:", error);
        return;
    }

    console.log("MySQL conectado correctamente");
});

module.exports = conexion;