const formulario =
    document.getElementById("registroForm");

const mensaje =
    document.getElementById("mensaje");


formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const correo =
        document.getElementById("correo").value;

    const password =
        document.getElementById("password").value;


    try {

        const respuesta = await fetch(
            "/api/auth/registro",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nombre,
                    correo,
                    password
                })
            }
        );


        const datos = await respuesta.json();


        mensaje.textContent = datos.mensaje;


        if (respuesta.ok) {

            formulario.reset();

            setTimeout(() => {
                window.location.href =
                    "/login.html";
            }, 1500);

        }

    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "No se pudo conectar con el servidor.";

    }

});