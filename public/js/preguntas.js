const btnNuevaPregunta =
    document.getElementById("btnNuevaPregunta");

const formularioPregunta =
    document.getElementById("formularioPregunta");

const textoPregunta =
    document.getElementById("textoPregunta");

const categoriaPregunta =
    document.getElementById("categoriaPregunta");

const btnGuardarPregunta =
    document.getElementById("btnGuardarPregunta");

const btnCancelarPregunta =
    document.getElementById("btnCancelarPregunta");

const listaPreguntas =
    document.getElementById("listaPreguntas");

const mensaje =
    document.getElementById("mensaje");

let preguntaEditando = null;

// ==========================================
// CARGAR CATEGORÍAS
// ==========================================

async function cargarCategorias() {

    try {

        const respuesta =
            await fetch(
                "/api/admin/categorias"
            );


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
                "Error al obtener las categorías"
            );

        }


        const categorias =
            await respuesta.json();


        categoriaPregunta.innerHTML = "";


        const opcionInicial =
            document.createElement("option");

        opcionInicial.value = "";

        opcionInicial.textContent =
            "Selecciona una categoría";

        categoriaPregunta.appendChild(
            opcionInicial
        );


        categorias.forEach(
            (categoria) => {

                const opcion =
                    document.createElement("option");

                opcion.value =
                    categoria.id_categoria;

                opcion.textContent =
                    categoria.nombre;

                categoriaPregunta.appendChild(
                    opcion
                );

            }
        );


    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "Error al cargar las categorías.";

        mensaje.className =
            "mensaje-error";

    }

}

// ==========================================
// CARGAR PREGUNTAS
// ==========================================

async function cargarPreguntas() {
    try {

        const respuesta =
            await fetch("/api/admin/preguntas");


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
                "Error al obtener las preguntas"
            );

        }


        const preguntas =
            await respuesta.json();


        listaPreguntas.innerHTML = "";


        // ======================================
        // ENCABEZADO
        // ======================================

        const encabezadoLista =
            document.createElement("div");

        encabezadoLista.className =
            "preguntas-lista-header";


        const titulo =
            document.createElement("h2");

        titulo.textContent =
            "Preguntas registradas";


        const cantidad =
            document.createElement("span");

        cantidad.textContent =
            `${preguntas.length} ${preguntas.length === 1
                ? "pregunta"
                : "preguntas"
            }`;


        encabezadoLista.appendChild(titulo);

        encabezadoLista.appendChild(cantidad);


        listaPreguntas.appendChild(
            encabezadoLista
        );


        // ======================================
        // SIN PREGUNTAS
        // ======================================

        if (
            !preguntas ||
            preguntas.length === 0
        ) {

            const mensajeVacio =
                document.createElement("div");

            mensajeVacio.className =
                "preguntas-vacio";


            mensajeVacio.textContent =
                "No hay preguntas registradas.";


            listaPreguntas.appendChild(
                mensajeVacio
            );

            return;

        }


        // ======================================
        // CONTENEDOR DE TARJETAS
        // ======================================

        const contenedor =
            document.createElement("div");

        contenedor.className =
            "preguntas-grid";


        // ======================================
        // CREAR TARJETAS
        // ======================================

        preguntas.forEach(
            (pregunta, indice) => {

                const tarjeta =
                    document.createElement("article");

                tarjeta.className =
                    "pregunta-card";


                // ------------------------------
                // ENCABEZADO DE TARJETA
                // ------------------------------

                const tarjetaHeader =
                    document.createElement("div");

                tarjetaHeader.className =
                    "pregunta-card-header";


                const numero =
                    document.createElement("span");

                numero.className =
                    "pregunta-card-numero";


                numero.textContent =
                    `PREGUNTA ${String(
                        indice + 1
                    ).padStart(2, "0")}`;


                const id =
                    document.createElement("span");

                id.className =
                    "pregunta-card-id";


                id.textContent =
                    `ID: ${pregunta.id_pregunta}`;


                tarjetaHeader.appendChild(numero);

                tarjetaHeader.appendChild(id);


                // ------------------------------
                // TEXTO
                // ------------------------------

                const texto =
                    document.createElement("p");

                texto.className =
                    "pregunta-card-texto";


                texto.textContent =
                    pregunta.pregunta;


                // ------------------------------
                // CATEGORÍA
                // ------------------------------

                const categoria =
                    document.createElement("div");

                categoria.className =
                    "pregunta-card-categoria";


                const etiquetaCategoria =
                    document.createElement("span");

                etiquetaCategoria.textContent =
                    "Categoría";


                const nombreCategoria =
                    document.createElement("strong");

                const opcionCategoria =
                    Array.from(
                        categoriaPregunta.options
                    ).find(
                        (opcion) =>
                            String(opcion.value) ===
                            String(pregunta.id_categoria)
                    );

                nombreCategoria.textContent =
                    opcionCategoria
                        ? opcionCategoria.textContent
                        : "Sin categoría";

                categoria.appendChild(
                    etiquetaCategoria
                );

                categoria.appendChild(
                    nombreCategoria
                );


                // ------------------------------
                // BOTONES
                // ------------------------------

                const botones =
                    document.createElement("div");

                botones.className =
                    "pregunta-card-botones";


                // EDITAR

                const botonEditar =
                    document.createElement("button");

                botonEditar.type =
                    "button";

                botonEditar.className =
                    "pregunta-btn pregunta-btn-editar";

                botonEditar.textContent =
                    "✏️ Editar";


                botonEditar.addEventListener(
                    "click",
                    () => {

                        editarPregunta(
                            pregunta.id_pregunta,
                            pregunta.pregunta,
                            pregunta.id_categoria
                        );

                    }
                );


                // ELIMINAR

                const botonEliminar =
                    document.createElement("button");

                botonEliminar.type =
                    "button";

                botonEliminar.className =
                    "pregunta-btn pregunta-btn-eliminar";

                botonEliminar.textContent =
                    "🗑️ Eliminar";


                botonEliminar.addEventListener(
                    "click",
                    () => {

                        eliminarPregunta(
                            pregunta.id_pregunta
                        );

                    }
                );


                botones.appendChild(
                    botonEditar
                );

                botones.appendChild(
                    botonEliminar
                );


                // ------------------------------
                // ARMAR TARJETA
                // ------------------------------

                tarjeta.appendChild(
                    tarjetaHeader
                );

                tarjeta.appendChild(
                    texto
                );

                tarjeta.appendChild(
                    categoria
                );

                tarjeta.appendChild(
                    botones
                );


                contenedor.appendChild(
                    tarjeta
                );

            }
        );


        listaPreguntas.appendChild(
            contenedor
        );


    } catch (error) {

        console.error(error);


        mensaje.textContent =
            "Error al cargar las preguntas.";


        mensaje.className =
            "mensaje-error";

    }
}

// ==========================================
// MOSTRAR FORMULARIO
// ==========================================

if (btnNuevaPregunta) {

    btnNuevaPregunta.addEventListener(
        "click",
        async () => {

            preguntaEditando = null;


            textoPregunta.value = "";


            categoriaPregunta.value = "";


            formularioPregunta.style.display =
                "block";


            mensaje.textContent = "";


            textoPregunta.focus();

        }
    );

}

// ==========================================
// CANCELAR FORMULARIO
// ==========================================

if (btnCancelarPregunta) {

    btnCancelarPregunta.addEventListener(
        "click",
        () => {

            preguntaEditando = null;


            textoPregunta.value = "";


            categoriaPregunta.value = "";


            formularioPregunta.style.display =
                "none";


            mensaje.textContent = "";

        }
    );

}

// ==========================================
// GUARDAR / ACTUALIZAR PREGUNTA
// ==========================================

if (btnGuardarPregunta) {

    btnGuardarPregunta.addEventListener(
        "click",
        async () => {

            const pregunta =
                textoPregunta.value.trim();


            const id_categoria =
                categoriaPregunta.value;


            // ==============================
            // VALIDAR PREGUNTA
            // ==============================

            if (!pregunta) {

                mensaje.textContent =
                    "Escribe una pregunta.";

                mensaje.className =
                    "mensaje-error";

                textoPregunta.focus();

                return;

            }


            // ==============================
            // VALIDAR CATEGORÍA
            // ==============================

            if (!id_categoria) {

                mensaje.textContent =
                    "Selecciona una categoría.";

                mensaje.className =
                    "mensaje-error";

                categoriaPregunta.focus();

                return;

            }


            btnGuardarPregunta.disabled =
                true;


            try {

                let respuesta;


                // ==============================
                // EDITAR
                // ==============================

                if (
                    preguntaEditando !== null
                ) {

                    respuesta =
                        await fetch(
                            `/api/admin/preguntas/${preguntaEditando}`,
                            {

                                method: "PUT",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({

                                    pregunta:
                                        pregunta,

                                    id_categoria:
                                        Number(id_categoria)

                                })

                            }
                        );


                } else {


                    // ==============================
                    // CREAR
                    // ==============================

                    respuesta =
                        await fetch(
                            "/api/admin/preguntas",
                            {

                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({

                                    pregunta:
                                        pregunta,

                                    id_categoria:
                                        Number(id_categoria)

                                })

                            }
                        );

                }


                // ==============================
                // SESIÓN
                // ==============================

                if (
                    respuesta.status === 401 ||
                    respuesta.status === 403
                ) {

                    window.location.href =
                        "/login.html";

                    return;

                }


                const datos =
                    await respuesta.json();


                // ==============================
                // ERROR
                // ==============================

                if (!respuesta.ok) {

                    mensaje.textContent =
                        datos.mensaje ||
                        "No se pudo guardar la pregunta.";

                    mensaje.className =
                        "mensaje-error";

                    return;

                }


                // ==============================
                // ÉXITO
                // ==============================

                mensaje.textContent =
                    datos.mensaje ||
                    "Pregunta guardada correctamente.";

                mensaje.className =
                    "mensaje-exito";


                preguntaEditando = null;


                textoPregunta.value = "";


                categoriaPregunta.value = "";


                formularioPregunta.style.display =
                    "none";


                await cargarPreguntas();


            } catch (error) {

                console.error(error);


                mensaje.textContent =
                    "Error al guardar la pregunta.";


                mensaje.className =
                    "mensaje-error";

            } finally {

                btnGuardarPregunta.disabled =
                    false;

            }

        }
    );

}

// ==========================================
// EDITAR PREGUNTA
// ==========================================

function editarPregunta(
    id,
    preguntaActual,
    idCategoria
) {

    preguntaEditando = id;


    textoPregunta.value =
        preguntaActual;


    categoriaPregunta.value =
        idCategoria;


    formularioPregunta.style.display =
        "block";


    mensaje.textContent =
        "Editando pregunta.";


    mensaje.className = "";


    textoPregunta.focus();

}

// ==========================================
// ELIMINAR PREGUNTA
// ==========================================

async function eliminarPregunta(id) {

    const confirmar =
        confirm(
            "¿Seguro que deseas eliminar esta pregunta?"
        );


    if (!confirmar) {

        return;

    }


    try {

        const respuesta =
            await fetch(
                `/api/admin/preguntas/${id}`,
                {
                    method: "DELETE"
                }
            );


        if (
            respuesta.status === 401 ||
            respuesta.status === 403
        ) {

            window.location.href =
                "/login.html";

            return;

        }


        const datos =
            await respuesta.json();


        if (!respuesta.ok) {

            mensaje.textContent =
                datos.mensaje ||
                "No se pudo eliminar la pregunta.";

            mensaje.className =
                "mensaje-error";

            return;

        }


        mensaje.textContent =
            datos.mensaje ||
            "Pregunta eliminada correctamente.";

        mensaje.className =
            "mensaje-exito";


        if (
            preguntaEditando === id
        ) {

            preguntaEditando = null;


            textoPregunta.value = "";


            categoriaPregunta.value = "";


            formularioPregunta.style.display =
                "none";

        }


        await cargarPreguntas();


    } catch (error) {

        console.error(error);


        mensaje.textContent =
            "Error al eliminar la pregunta.";


        mensaje.className =
            "mensaje-error";

    }

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

async function iniciarPagina() {

    await cargarCategorias();

    await cargarPreguntas();

}

iniciarPagina();
