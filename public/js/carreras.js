// ==========================================
// GESTIÓN DE CARRERAS
// ==========================================

const listaCarreras =
    document.getElementById("listaCarreras");

const mensaje =
    document.getElementById("mensaje");

const btnNuevaCarrera =
    document.getElementById("btnNuevaCarrera");

const formularioCarrera =
    document.getElementById("formularioCarrera");

const btnCancelarCarrera =
    document.getElementById("btnCancelarCarrera");

const areaCarrera =
    document.getElementById("areaCarrera");


// ==========================================
// CARGAR CARRERAS
// ==========================================

async function cargarCarreras() {

    try {

        const respuesta =
            await fetch("/api/admin/carreras");

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
                "No se pudieron cargar las carreras."
            );

        }

        mostrarCarreras(datos);

    } catch (error) {

        console.error(
            "Error al cargar carreras:",
            error
        );

        mensaje.textContent =
            error.message ||
            "No se pudieron cargar las carreras.";

        mensaje.className =
            "mensaje-error";

    }

}


// ==========================================
// MOSTRAR CARRERAS
// ==========================================

function mostrarCarreras(carreras) {

    listaCarreras.innerHTML = "";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        "Carreras registradas";

    titulo.style.marginBottom =
        "25px";

    listaCarreras.appendChild(
        titulo
    );


    if (
        !carreras ||
        carreras.length === 0
    ) {

        const sinCarreras =
            document.createElement("p");

        sinCarreras.textContent =
            "No hay carreras registradas.";

        listaCarreras.appendChild(
            sinCarreras
        );

        return;

    }


    const contenedor =
        document.createElement("div");

    contenedor.className =
        "lista-carreras";


    carreras.forEach(
        carrera => {

            const tarjeta =
                document.createElement("div");

            tarjeta.className =
                "carrera-item";


            const nombre =
                document.createElement("h4");

            nombre.textContent =
                carrera.nombre;


            tarjeta.appendChild(
                nombre
            );


            if (
                carrera.descripcion
            ) {

                const descripcion =
                    document.createElement("p");

                descripcion.textContent =
                    carrera.descripcion;

                tarjeta.appendChild(
                    descripcion
                );

            }


            if (
                carrera.nombre_area ||
                carrera.categoria
            ) {

                const area =
                    document.createElement("p");

                area.textContent =
                    `Área: ${
                        carrera.nombre_area ||
                        carrera.categoria
                    }`;

                area.style.marginTop =
                    "10px";

                tarjeta.appendChild(
                    area
                );

            }


            contenedor.appendChild(
                tarjeta
            );

        }
    );


    listaCarreras.appendChild(
        contenedor
    );

}


// ==========================================
// CARGAR ÁREAS EN EL SELECT
// ==========================================

async function cargarAreas() {

    try {

        const respuesta =
            await fetch(
                "/api/admin/categorias"
            );

        const areas =
            await respuesta.json();

        if (!respuesta.ok) {
            return;
        }

        areaCarrera.innerHTML =
            '<option value="">Selecciona un área</option>';

        areas.forEach(
            area => {

                const opcion =
                    document.createElement("option");

                opcion.value =
                    area.id_categoria;

                opcion.textContent =
                    area.nombre;

                areaCarrera.appendChild(
                    opcion
                );

            }
        );

    } catch (error) {

        console.error(
            "Error al cargar áreas:",
            error
        );

    }

}


// ==========================================
// MOSTRAR FORMULARIO
// ==========================================

if (btnNuevaCarrera) {

    btnNuevaCarrera.addEventListener(
        "click",
        () => {

            formularioCarrera.style.display =
                "block";

            cargarAreas();

        }
    );

}


// ==========================================
// CANCELAR
// ==========================================

if (btnCancelarCarrera) {

    btnCancelarCarrera.addEventListener(
        "click",
        () => {

            formularioCarrera.style.display =
                "none";

        }
    );

}


// ==========================================
// INICIAR
// ==========================================

cargarCarreras();