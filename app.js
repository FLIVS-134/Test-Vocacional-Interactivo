require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");
const { initDatabase } = require("./config/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET || "test-vocacional-secreto",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 4
    }
}));

app.use(express.static(path.join(__dirname, "public")));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);
console.log("✅ TEST ROUTES MONTADO EN /api/test");

const flivsRoutes = require("./routes/flivsRoutes");
app.use("/api/flivs", flivsRoutes);

app.use((err, req, res, next) => {
    console.error("Error global:", err);
    res.status(500).json({
        mensaje: "Error interno del servidor"
    });
});

async function iniciarServidor() {
    try {
        await initDatabase();

        app.listen(PORT, () => {
            console.log(`Servidor funcionando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("No se pudo iniciar la aplicación:", error);
        process.exit(1);
    }
}

iniciarServidor();