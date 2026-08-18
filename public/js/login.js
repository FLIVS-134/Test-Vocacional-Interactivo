const formulario =
    document.getElementById("loginForm");

const mensaje =
    document.getElementById("mensaje");


formulario.addEventListener("submit", async (event) => {

    event.preventDefault();


    const correo =
        document.getElementById("correo").value;

    const password =
        document.getElementById("password").value;


    try {

        const respuesta = await fetch(
            "/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    correo,
                    password
                })
            }
        );


        const datos = await respuesta.json();

        console.log("DATOS DEL LOGIN:", datos);

        if (!respuesta.ok) {

            mensaje.textContent =
                datos.mensaje;

            return;
        }


        mensaje.textContent =
            `Bienvenido/a ${datos.usuario.nombre}`;


        setTimeout(() => {

            if (datos.usuario.rol === "admin") {

                window.location.href = "/admin/panel.html";

            } else {

                window.location.href = "/test.html";

            }

        }, 1000);


    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "No se pudo conectar con el servidor.";

    }

});