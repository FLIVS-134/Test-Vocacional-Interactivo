const formulario =
document.getElementById("registroForm");

const mensaje =
document.getElementById("mensaje");

if (formulario) {

    // ==========================================
    // LIMPIAR FORMULARIO AL ENTRAR
    // ==========================================

    formulario.reset();

    // ==========================================
    // REGISTRO DE USUARIO
    // ==========================================

    formulario.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const nombre =
                document.getElementById(
                    "nombre"
                ).value.trim();

            const correo =
                document.getElementById(
                    "correo"
                ).value.trim();

            const password =
                document.getElementById(
                    "password"
                ).value;

            const confirmarPassword =
                document.getElementById(
                    "confirmarPassword"
                ).value;

            mensaje.textContent = "";

            // ==========================================
            // VALIDAR CAMPOS
            // ==========================================

            if (
                !nombre ||
                !correo ||
                !password ||
                !confirmarPassword
            ) {

                mensaje.textContent =
                    "Completa todos los campos.";

                return;
            }

            // ==========================================
            // VALIDAR CONTRASEÑAS
            // ==========================================

            if (
                password !==
                confirmarPassword
            ) {

                mensaje.textContent =
                    "Las contraseñas no coinciden.";

                return;
            }

            try {

                const respuesta =
                    await fetch(
                        "/api/auth/registro",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                nombre,
                                correo,
                                password
                            })
                        }
                    );

                const datos =
                    await respuesta.json();

                mensaje.textContent =
                    datos.mensaje;

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

        }
    );

} else {

    console.error(
        "No se encontró el formulario de registro."
    );

}