// ==========================================
// GESTIÓN DE USUARIOS
// ==========================================

const listaUsuarios =
    document.getElementById("listaUsuarios");

const mensaje =
    document.getElementById("mensaje");


// ==========================================
// CARGAR USUARIOS
// ==========================================

async function cargarUsuarios() {

    try {

        const respuesta =
            await fetch("/api/admin/usuarios");

        const datos =
            await respuesta.json();

        if (
            respuesta.status === 401 ||
            respuesta.status === 403
        ) {

            window.location.href =
                "/login.html";

            return;

        }

        if (!respuesta.ok) {

            throw new Error(
                datos.mensaje ||
                "No se pudieron cargar los usuarios."
            );

        }

        mostrarUsuarios(datos);

    } catch (error) {

        console.error(
            "Error al cargar usuarios:",
            error
        );

        mensaje.textContent =
            error.message ||
            "No se pudieron cargar los usuarios.";

        mensaje.className =
            "mensaje-error";

    }

}


// ==========================================
// MOSTRAR USUARIOS
// ==========================================

function mostrarUsuarios(usuarios) {

    listaUsuarios.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        "Usuarios registrados";

    titulo.style.marginBottom =
        "25px";

    listaUsuarios.appendChild(
        titulo
    );


    if (
        !usuarios ||
        usuarios.length === 0
    ) {

        const sinUsuarios =
            document.createElement("p");

        sinUsuarios.textContent =
            "No hay usuarios registrados.";

        listaUsuarios.appendChild(
            sinUsuarios
        );

        return;

    }


    const contenedor =
        document.createElement("div");

    contenedor.className =
        "lista-carreras";


    usuarios.forEach(
        usuario => {

            const tarjeta =
                document.createElement("div");

            tarjeta.className =
                "carrera-item";


            const nombre =
                document.createElement("h4");

            nombre.textContent =
                usuario.nombre;

            tarjeta.appendChild(
                nombre
            );


            const correo =
                document.createElement("p");

            correo.textContent =
                `Correo: ${usuario.correo}`;

            tarjeta.appendChild(
                correo
            );


            const rol =
                document.createElement("p");

            rol.textContent =
                `Rol: ${usuario.rol || "Usuario"}`;

            rol.style.marginTop =
                "8px";

            tarjeta.appendChild(
                rol
            );


            contenedor.appendChild(
                tarjeta
            );

        }
    );


    listaUsuarios.appendChild(
        contenedor
    );

}


// ==========================================
// INICIAR
// ==========================================

cargarUsuarios();