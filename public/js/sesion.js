document.addEventListener("DOMContentLoaded", async () => {

    const enlaceSesion =
        document.getElementById("enlaceSesion");

    if (!enlaceSesion) {
        return;
    }

    try {

        const respuesta =
            await fetch("/api/auth/sesion");

        const datos =
            await respuesta.json();

        if (
            respuesta.ok &&
            datos.autenticado &&
            datos.usuario
        ) {

            enlaceSesion.textContent =
                "Cerrar sesión";

            enlaceSesion.href = "#";

            enlaceSesion.addEventListener(
                "click",
                async (event) => {

                    event.preventDefault();

                    try {

                        const respuestaLogout =
                            await fetch(
                                "/api/auth/logout"
                            );

                        if (respuestaLogout.ok) {

                            localStorage.removeItem(
                                "usuario"
                            );

                            window.location.href =
                                "/login.html";

                        }

                    } catch (error) {

                        console.error(
                            "Error al cerrar sesión:",
                            error
                        );

                    }

                }
            );

        } else {

            enlaceSesion.textContent =
                "Iniciar sesión";

            enlaceSesion.href =
                "/login.html";

        }

    } catch (error) {

        console.error(
            "No se pudo comprobar la sesión:",
            error
        );

    }

});