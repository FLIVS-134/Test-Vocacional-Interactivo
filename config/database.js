const mysql = require("mysql2/promise");

const conexion = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test_vocacional",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const initDatabase = async () => {
    try {

        // ==========================================
        // VERIFICAR CONEXIÓN CON MYSQL
        // ==========================================

        await conexion.query("SELECT 1");

        console.log("MySQL conectado correctamente");

    } catch (error) {

        console.error(
            "Error al conectar con MySQL:",
            error
        );

        throw error;
    }
};

module.exports = conexion;

module.exports.initDatabase = initDatabase;