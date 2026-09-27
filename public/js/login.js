const formulario =
document.getElementById("loginForm");

const mensaje =
document.getElementById("mensaje");

if (formulario) {

    formulario.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const correo =
                document.getElementById(
                    "correo"
                ).value.trim();

            const password =
                document.getElementById(
                    "password"
                ).value;

            mensaje.textContent = "";

            if (!correo || !password) {

                mensaje.textContent =
                    "Completa todos los campos.";

                return;
            }

            try {

                const respuesta =
                    await fetch(
                        "/api/auth/login",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                correo,
                                password
                            })
                        }
                    );

                const datos =
                    await respuesta.json();

                if (!respuesta.ok) {

                    mensaje.textContent =
                        datos.mensaje ||
                        "Correo o contraseña incorrectos.";

                    return;
                }

                // Guardar los datos del usuario
                localStorage.setItem(
                    "usuario",
                    JSON.stringify(datos.usuario)
                );

                mensaje.textContent =
                    `Bienvenido/a ${datos.usuario.nombre}`;

                setTimeout(() => {

                    if (
                        datos.usuario &&
                        datos.usuario.rol === "admin"
                    ) {

                        window.location.href =
                            "/admin/panel.html";

                    } else {

                        window.location.href =
                            "/test.html";

                    }

                }, 1000);

            } catch (error) {

                console.error(error);

                mensaje.textContent =
                    "No se pudo conectar con el servidor.";

            }

        }
    );

}