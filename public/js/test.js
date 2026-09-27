// =====================================================
// TEST VOCACIONAL INTERACTIVO
// JavaScript del test
// =====================================================

const preguntasContainer =
    document.getElementById("preguntasContainer");

const progreso =
    document.getElementById("progreso");

const progresoTexto =
    document.getElementById("progresoTexto");

const mensaje =
    document.getElementById("mensaje");

const btnAnterior =
    document.getElementById("btnAnterior");

const btnSiguiente =
    document.getElementById("btnSiguiente");

const resultadoContainer =
    document.getElementById("resultadoContainer");

const resultadoTexto =
    document.getElementById("resultadoTexto");


// =====================================================
// VARIABLES DEL TEST
// =====================================================

let preguntas = [];

let respuestas = {};

let preguntaActual = 0;


// =====================================================
// CARGAR PREGUNTAS
// =====================================================

async function cargarPreguntas() {

    try {

        const respuesta =
            await fetch("/api/test/preguntas");

        if (!respuesta.ok) {
            throw new Error(
                "No se pudieron cargar las preguntas."
            );
        }

        preguntas =
            await respuesta.json();

        if (
            !preguntas ||
            preguntas.length === 0
        ) {

            mensaje.textContent =
                "No hay preguntas disponibles.";

            return;
        }

        mostrarPregunta();

    } catch (error) {

        console.error(
            "Error al cargar las preguntas:",
            error
        );

        mensaje.textContent =
            "Ocurrió un error al cargar el test.";
    }
}


// =====================================================
// MOSTRAR PREGUNTA
// =====================================================

function mostrarPregunta() {

    if (
        !preguntas ||
        preguntas.length === 0
    ) {
        return;
    }

    const pregunta =
        preguntas[preguntaActual];

    preguntasContainer.innerHTML = "";


    const preguntaTitulo =
        document.createElement("h3");

    preguntaTitulo.textContent =
        `${preguntaActual + 1}. ${pregunta.pregunta}`;

    preguntasContainer.appendChild(
        preguntaTitulo
    );


    // =================================================
    // OPCIONES
    // =================================================

    const opcionesContainer =
        document.createElement("div");

    opcionesContainer.className =
        "opciones-container";


    if (
        pregunta.opciones &&
        pregunta.opciones.length > 0
    ) {

        pregunta.opciones.forEach(
            opcion => {

                const label =
                    document.createElement("label");

                label.className =
                    "opcion";


                const radio =
                    document.createElement("input");

                radio.type =
                    "radio";

                radio.name =
                    "respuesta";

                radio.value =
                    opcion.id_opcion;


                if (
                    respuestas[pregunta.id_pregunta] ==
                    opcion.id_opcion
                ) {

                    radio.checked =
                        true;
                }


                radio.addEventListener(
                    "change",
                    function () {

                        respuestas[
                            pregunta.id_pregunta
                        ] =
                            this.value;

                    }
                );


                label.appendChild(
                    radio
                );


                const texto =
                    document.createElement("span");

                texto.textContent =
                    opcion.texto;


                label.appendChild(
                    texto
                );


                opcionesContainer.appendChild(
                    label
                );
            }
        );

    } else {

        const sinOpciones =
            document.createElement("p");

        sinOpciones.textContent =
            "Esta pregunta no tiene opciones disponibles.";

        opcionesContainer.appendChild(
            sinOpciones
        );
    }


    preguntasContainer.appendChild(
        opcionesContainer
    );


    // =================================================
    // ACTUALIZAR PROGRESO
    // =================================================

    const porcentaje =
        ((preguntaActual + 1) /
            preguntas.length) *
        100;


    if (progreso) {

        progreso.style.width =
            `${porcentaje}%`;
    }


    if (progresoTexto) {

        progresoTexto.textContent =
            `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    }


    // =================================================
    // BOTÓN ANTERIOR
    // =================================================

    if (btnAnterior) {

        btnAnterior.disabled =
            preguntaActual === 0;
    }


    // =================================================
    // BOTÓN SIGUIENTE
    // =================================================

    if (btnSiguiente) {

        if (
            preguntaActual ===
            preguntas.length - 1
        ) {

            btnSiguiente.textContent =
                "Finalizar test";

        } else {

            btnSiguiente.textContent =
                "Siguiente";
        }
    }


    mensaje.textContent = "";
}


// =====================================================
// BOTÓN ANTERIOR
// =====================================================

if (btnAnterior) {

    btnAnterior.addEventListener(
        "click",
        function () {

            if (preguntaActual > 0) {

                preguntaActual--;

                mostrarPregunta();
            }
        }
    );
}


// =====================================================
// BOTÓN SIGUIENTE
// =====================================================

if (btnSiguiente) {

    btnSiguiente.addEventListener(
        "click",
        function () {

            const pregunta =
                preguntas[preguntaActual];


            // Verificar que haya respuesta

            if (
                !respuestas[
                    pregunta.id_pregunta
                ]
            ) {

                mensaje.textContent =
                    "Por favor selecciona una respuesta antes de continuar.";

                return;
            }


            // Si todavía hay preguntas

            if (
                preguntaActual <
                preguntas.length - 1
            ) {

                preguntaActual++;

                mostrarPregunta();

            } else {

                enviarRespuestas();
            }
        }
    );
}


// =====================================================
// ENVIAR RESPUESTAS
// =====================================================

async function enviarRespuestas() {

    try {

        btnSiguiente.disabled =
            true;

        btnAnterior.disabled =
            true;


        mensaje.textContent =
            "Estamos analizando tus respuestas...";


        const respuesta =
            await fetch(
                "/api/test/respuestas",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        respuestas: respuestas
                    })
                }
            );


        if (!respuesta.ok) {

            throw new Error(
                "No se pudieron enviar las respuestas."
            );
        }


        const datos =
            await respuesta.json();


        console.log(
            "RESULTADO COMPLETO DEL TEST:",
            datos
        );


        // =============================================
        // OCULTAR TEST
        // =============================================

        preguntasContainer.style.display =
            "none";


        if (progreso) {

            progreso.parentElement.style.display =
                "none";
        }


        if (progresoTexto) {

            progresoTexto.style.display =
                "none";
        }


        const botonesTest =
            document.querySelector(
                ".botones-test"
            );


        if (botonesTest) {

            botonesTest.style.display =
                "none";
        }


        mensaje.textContent = "";


        // =============================================
        // MOSTRAR RESULTADO
        // =============================================

        resultadoContainer.style.display =
            "block";


        resultadoTexto.innerHTML =
            `
            Tu área vocacional principal es:
            <strong>${datos.categoriaPrincipal.nombre}</strong>
            `;


        // =============================================
        // MOSTRAR CARRERAS
        // =============================================

        mostrarCarreras(
            datos.carreras
        );


    } catch (error) {

        console.error(
            "Error al enviar las respuestas:",
            error
        );


        mensaje.textContent =
            "Ocurrió un error al procesar tu resultado.";


        btnSiguiente.disabled =
            false;

        btnAnterior.disabled =
            false;
    }
}


// =====================================================
// MOSTRAR CARRERAS
// =====================================================

function mostrarCarreras(carreras) {

    const contenedorAnterior =
        document.getElementById(
            "carrerasRecomendadas"
        );


    if (contenedorAnterior) {

        contenedorAnterior.remove();
    }


    const contenedor =
        document.createElement("div");


    contenedor.id =
        "carrerasRecomendadas";


    contenedor.className =
        "resultado-carreras";


    const titulo =
        document.createElement("h3");


    titulo.textContent =
        "🎓 Carreras recomendadas";


    contenedor.appendChild(
        titulo
    );


    if (
        !carreras ||
        carreras.length === 0
    ) {

        const mensajeCarreras =
            document.createElement("p");


        mensajeCarreras.textContent =
            "No encontramos carreras recomendadas.";


        contenedor.appendChild(
            mensajeCarreras
        );


    } else {

        const lista =
            document.createElement("div");


        lista.className =
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


                lista.appendChild(
                    tarjeta
                );
            }
        );


        contenedor.appendChild(
            lista
        );
    }


    resultadoContainer.appendChild(
        contenedor
    );
}


// =====================================================
// COMPROBAR RESULTADO GUARDADO
// =====================================================

async function comprobarResultadoGuardado() {

    try {

        const respuesta =
            await fetch(
                "/api/test/resultado"
            );


        if (!respuesta.ok) {

            return;
        }


        const datos =
            await respuesta.json();


        if (
            datos.tieneResultado
        ) {

            mostrarResultadoGuardado(
                datos
            );
        }


    } catch (error) {

        console.error(
            "Error al comprobar resultado guardado:",
            error
        );
    }
}


// =====================================================
// MOSTRAR RESULTADO GUARDADO
// =====================================================

function mostrarResultadoGuardado(
    datos
) {

    if (
        !datos ||
        !datos.tieneResultado
    ) {

        return;
    }


    console.log(
        "RESULTADO GUARDADO:",
        datos
    );


    // =============================================
    // OCULTAR TEST
    // =============================================

    preguntasContainer.style.display =
        "none";


    if (progreso) {

        progreso.parentElement.style.display =
            "none";
    }


    if (progresoTexto) {

        progresoTexto.style.display =
            "none";
    }


    const botonesTest =
        document.querySelector(
            ".botones-test"
        );


    if (botonesTest) {

        botonesTest.style.display =
            "none";
    }


    mensaje.textContent = "";


    // =============================================
    // MOSTRAR RESULTADO
    // =============================================

    resultadoContainer.style.display =
        "block";


    resultadoTexto.innerHTML =
        `
        Tu área vocacional principal es:
        <strong>${datos.categoriaPrincipal.nombre}</strong>
        `;


    // =============================================
    // MOSTRAR CARRERAS
    // =============================================

    mostrarCarreras(
        datos.carreras
    );
}


// =====================================================
// INICIAR TEST
// =====================================================

cargarPreguntas();


// =====================================================
// COMPROBAR SI YA EXISTE UN RESULTADO
// =====================================================

comprobarResultadoGuardado();