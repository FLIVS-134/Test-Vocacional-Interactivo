// ==========================================
// GESTIÓN DE ÁREAS / CATEGORÍAS
// ==========================================

const listaAreas =
    document.getElementById("listaAreas");

const mensaje =
    document.getElementById("mensaje");

const btnNuevaArea =
    document.getElementById("btnNuevaArea");

const formularioArea =
    document.getElementById("formularioArea");

const btnCancelarArea =
    document.getElementById("btnCancelarArea");


// ==========================================
// CARGAR ÁREAS
// ==========================================

async function cargarAreas() {

    try {

        const respuesta =
            await fetch("/api/admin/categorias");

        const datos =
            await respuesta.json();

        if (respuesta.status === 401 ||
            respuesta.status === 403) {

            window.location.href =
                "/login.html";

            return;
        }

        if (!respuesta.ok) {

            throw new Error(
                datos.mensaje ||
                "No se pudieron cargar las áreas."
            );

        }

        mostrarAreas(datos);

    } catch (error) {

        console.error(
            "Error al cargar áreas:",
            error
        );

        mensaje.textContent =
            error.message ||
            "No se pudieron cargar las áreas.";

        mensaje.className =
            "mensaje-error";

    }

}


// ==========================================
// MOSTRAR ÁREAS
// ==========================================

function mostrarAreas(areas) {

    listaAreas.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        "Áreas registradas";

    titulo.style.marginBottom =
        "25px";

    listaAreas.appendChild(titulo);


    if (!areas || areas.length === 0) {

        const sinAreas =
            document.createElement("p");

        sinAreas.textContent =
            "No hay áreas registradas.";

        listaAreas.appendChild(
            sinAreas
        );

        return;

    }


    const contenedor =
        document.createElement("div");

    contenedor.className =
        "lista-carreras";


    areas.forEach(area => {

        const tarjeta =
            document.createElement("div");

        tarjeta.className =
            "carrera-item";


        const nombre =
            document.createElement("h4");

        nombre.textContent =
            area.nombre;


        tarjeta.appendChild(
            nombre
        );


        if (area.descripcion) {

            const descripcion =
                document.createElement("p");

            descripcion.textContent =
                area.descripcion;

            tarjeta.appendChild(
                descripcion
            );

        }


        contenedor.appendChild(
            tarjeta
        );

    });


    listaAreas.appendChild(
        contenedor
    );

}


// ==========================================
// MOSTRAR FORMULARIO
// ==========================================

if (btnNuevaArea) {

    btnNuevaArea.addEventListener(
        "click",
        () => {

            formularioArea.style.display =
                "block";

        }
    );

}


// ==========================================
// CANCELAR
// ==========================================

if (btnCancelarArea) {

    btnCancelarArea.addEventListener(
        "click",
        () => {

            formularioArea.style.display =
                "none";

        }
    );

}


// ==========================================
// INICIAR
// ==========================================

cargarAreas();