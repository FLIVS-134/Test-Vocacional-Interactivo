async function cargarAdministrador() {

try {

    const respuesta = await fetch(
        "/api/admin/panel"
    );

    const datos =
        await respuesta.json();

    if (!respuesta.ok) {

        window.location.href =
            "/login.html";

        return;
    }

    const bienvenida =
        document.getElementById(
            "bienvenida"
        );

    if (bienvenida) {

        bienvenida.textContent =
            `Bienvenido/a, ${datos.usuario.nombre}`;

    }

} catch (error) {

    console.error(error);

    window.location.href =
        "/login.html";

}

}

// ==========================================
// NAVEGACIÓN DEL ADMINISTRADOR
// ==========================================

function irPreguntas() {

window.location.href =
    "/admin/preguntas.html";

}

function irUsuarios() {

window.location.href =
    "/admin/usuarios.html";

}

function irAreas() {

window.location.href =
    "/admin/areas.html";

}

function irCarreras() {

window.location.href =
    "/admin/carreras.html";

}

// ==========================================
// CERRAR SESIÓN
// ==========================================

async function cerrarSesion() {

try {

    await fetch(
        "/api/auth/logout"
    );

} catch (error) {

    console.error(error);

}

window.location.href =
    "/login.html";

}

// ==========================================
// INICIAR
// ==========================================

cargarAdministrador();