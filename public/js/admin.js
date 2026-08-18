async function cargarAdministrador() {

    try {

        const respuesta = await fetch(
            "/api/admin/panel"
        );

        const datos = await respuesta.json();

        if (!respuesta.ok) {

            window.location.href = "/login.html";

            return;
        }

        document.getElementById(
            "bienvenida"
        ).textContent =
            `Bienvenido/a, ${datos.usuario.nombre}`;

    } catch (error) {

        console.error(error);

        window.location.href = "/login.html";
    }
}


function irPreguntas() {

    window.location.href =
        "/admin/preguntas.html";
}


function irUsuarios() {

    alert("Gestión de usuarios próximamente");
}


function irAreas() {

    alert("Gestión de áreas próximamente");
}


function irCarreras() {

    alert("Gestión de carreras próximamente");
}


async function cerrarSesion() {

    await fetch("/api/auth/logout");

    window.location.href = "/login.html";
}


cargarAdministrador();