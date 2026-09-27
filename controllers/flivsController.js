const OpenAI = require("openai");

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

const responderFLIVS = async (req, res) => {
    try {
        const { mensaje } = req.body;

        if (!mensaje || !mensaje.trim()) {
            return res.status(400).json({
                error: "Escribe una pregunta para FLIVS."
            });
        }

        const respuesta = await client.chat.completions.create({
            model: "openrouter/free",
            messages: [
                {
                    role: "system",
                    content: `
Eres FLIVS, el asistente virtual del Test Vocacional Interactivo.

Tu función es ayudar a los usuarios con información relacionada con:
- Carreras universitarias.
- Universidades.
- Diferencias entre carreras.
- Comparaciones entre carreras o universidades.
- Ventajas y desventajas de diferentes carreras.
- Información general sobre orientación académica y profesional.

IMPORTANTE:
- No debes decidir qué carrera debe estudiar el usuario.
- No reemplazas el resultado del test vocacional.
- No debes afirmar que una carrera es "la mejor" para una persona.
- Si el usuario pregunta por universidades, carreras, costos, programas,
  requisitos o información que pueda cambiar con el tiempo, aclara que
  debe verificar la información en la página oficial de la institución.
- Responde de forma clara, amable y sencilla.
- Si no tienes suficiente información para responder correctamente,
  dilo en lugar de inventar datos.
- Puedes comparar diferentes opciones cuando el usuario lo solicite.
                    `
                },
                {
                    role: "user",
                    content: mensaje
                }
            ]
        });

        const texto = respuesta.choices[0].message.content;

        res.json({
            respuesta: texto
        });

    } catch (error) {
        console.error("Error en FLIVS:", error);

        res.status(500).json({
            error: "No fue posible obtener una respuesta de FLIVS."
        });
    }
};

module.exports = {
    responderFLIVS
};