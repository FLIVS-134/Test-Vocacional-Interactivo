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


let preguntas = [];

let respuestas = {};

let preguntaActual = 0;


// =====================================================
// CARGAR PREGUNTAS
// =====================================================

async function cargarPreguntas() {

    try {

        const respuesta =
            await fetch(
                "/api/test/preguntas"
            );


        if (!respuesta.ok) {

            const errorTexto =
                await respuesta.text();

            console.error(
                "Error al cargar preguntas:",
                respuesta.status,
                errorTexto
            );

            mensaje.textContent =
                "No se pudieron cargar las preguntas.";

            mensaje.className =
                "mensaje-error";

            return;

        }


        // =============================================
        // GUARDAR LAS PREGUNTAS RECIBIDAS
        // =============================================

        preguntas =
            await respuesta.json();


        console.log(
            "PREGUNTAS CARGADAS:",
            preguntas
        );


        // =============================================
        // VERIFICAR QUE SÍ HAY PREGUNTAS
        // =============================================

        if (
            !preguntas ||
            preguntas.length === 0
        ) {

            mensaje.textContent =
                "No hay preguntas disponibles.";

            mensaje.className =
                "mensaje-error";

            return;

        }


        // =============================================
        // MOSTRAR LA PRIMERA PREGUNTA
        // =============================================

        mostrarPregunta();


    } catch (error) {

        console.error(
            "Error al cargar preguntas:",
            error
        );


        mensaje.textContent =
            "No se pudieron cargar las preguntas. Intenta nuevamente.";

        mensaje.className =
            "mensaje-error";

    }

}


// =====================================================
// MOSTRAR PREGUNTA
// =====================================================

function mostrarPregunta() {

    preguntasContainer.innerHTML = "";

    mensaje.textContent = "";

    mensaje.className = "";


    const pregunta =
        preguntas[preguntaActual];


    if (!pregunta) {

        return;

    }


    const tarjeta =
        document.createElement("div");

    tarjeta.className =
        "pregunta";


    const titulo =
        document.createElement("h3");


    titulo.textContent =
        `${preguntaActual + 1}. ${pregunta.pregunta}`;


    tarjeta.appendChild(
        titulo
    );


    if (pregunta.categoria) {

        const categoria =
            document.createElement("p");

        categoria.className =
            "categoria-pregunta";

        categoria.textContent =
            `Área: ${pregunta.categoria}`;

        tarjeta.appendChild(
            categoria
        );

    }


    const opciones =
        document.createElement("div");

    opciones.className =
        "opciones";


    if (
        !pregunta.opciones ||
        pregunta.opciones.length === 0
    ) {

        const error =
            document.createElement("p");

        error.textContent =
            "Esta pregunta no tiene opciones disponibles.";

        error.className =
            "mensaje-error";

        opciones.appendChild(
            error
        );

    } else {

        pregunta.opciones.forEach(
            opcion => {

                const contenedor =
                    document.createElement("div");


                contenedor.className =
                    "opcion";


                const input =
                    document.createElement("input");


                input.type =
                    "radio";


                input.name =
                    `pregunta_${pregunta.id_pregunta}`;


                input.value =
                    opcion.id_opcion;


                input.id =
                    `pregunta_${pregunta.id_pregunta}_${opcion.id_opcion}`;


                if (
                    respuestas[pregunta.id_pregunta] ==
                    opcion.id_opcion
                ) {

                    input.checked = true;

                }


                const label =
                    document.createElement("label");


                label.htmlFor =
                    input.id;


                label.textContent =
                    opcion.texto_opcion;


                input.addEventListener(
                    "change",
                    () => {

                        respuestas[
                            pregunta.id_pregunta
                        ] =
                            Number(
                                input.value
                            );

                    }
                );


                contenedor.appendChild(
                    input
                );


                contenedor.appendChild(
                    label
                );


                opciones.appendChild(
                    contenedor
                );

            }
        );

    }


    tarjeta.appendChild(
        opciones
    );


    preguntasContainer.appendChild(
        tarjeta
    );


    actualizarProgreso();

    actualizarBotones();

}


// =====================================================
// ACTUALIZAR PROGRESO
// =====================================================

function actualizarProgreso() {

    const total =
        preguntas.length;


    if (total === 0) {

        return;

    }


    const porcentaje =
        ((preguntaActual + 1) / total) * 100;


    progreso.style.width =
        `${porcentaje}%`;


    progresoTexto.textContent =
        `${Math.round(porcentaje)}%`;

}


// =====================================================
// ACTUALIZAR BOTONES
// =====================================================

function actualizarBotones() {

    if (
        preguntaActual === 0
    ) {

        btnAnterior.style.display =
            "none";

    } else {

        btnAnterior.style.display =
            "block";

    }


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


// =====================================================
// BOTÓN ANTERIOR
// =====================================================

btnAnterior.addEventListener(
    "click",
    () => {

        if (
            preguntaActual > 0
        ) {

            preguntaActual--;

            mostrarPregunta();

        }

    }
);


// =====================================================
// BOTÓN SIGUIENTE
// =====================================================

btnSiguiente.addEventListener(
    "click",
    () => {

        const pregunta =
            preguntas[preguntaActual];


        if (!pregunta) {

            return;

        }


        if (
            !respuestas[
                pregunta.id_pregunta
            ]
        ) {

            mensaje.textContent =
                "Selecciona una respuesta antes de continuar.";

            mensaje.className =
                "mensaje-error";

            return;

        }


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


// =====================================================
// MOSTRAR CARRERAS RECOMENDADAS
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
            "No encontramos carreras asociadas a esta área.";

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
// ENVIAR RESPUESTAS
// =====================================================

async function enviarRespuestas() {

    btnSiguiente.disabled =
        true;

    btnAnterior.disabled =
        true;


    mensaje.textContent =
        "Guardando tus respuestas...";

    mensaje.className = "";


    try {

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
                        respuestas:
                            respuestas
                    })
                }
            );


        const datos =
            await respuesta.json();


        console.log(
            "RESULTADO GUARDADO:",
            datos
        );


        if (
            respuesta.status === 401
        ) {

            window.location.href =
                "/login.html";

            return;

        }


        if (!respuesta.ok) {

            throw new Error(
                datos.mensaje ||
                "No se pudieron guardar las respuestas"
            );

        }


        preguntasContainer.style.display =
            "none";


        const progresoContenedor =
            document.querySelector(
                ".progreso-contenedor"
            );


        if (progresoContenedor) {

            progresoContenedor.style.display =
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


        resultadoContainer.style.display =
            "block";


        // =============================================
        // MOSTRAR ÁREA PRINCIPAL
        // =============================================

        if (
            datos.categoriaPrincipal
        ) {

            resultadoTexto.textContent =
                `Tu área principal es ${datos.categoriaPrincipal.nombre}, con un puntaje de ${datos.categoriaPrincipal.puntaje} puntos.`;

        } else {

            resultadoTexto.textContent =
                "Hemos registrado tus respuestas correctamente.";

        }


        // =============================================
        // MOSTRAR CARRERAS
        // =============================================

        mostrarCarreras(
            datos.carreras
        );


        mensaje.textContent = "";


    } catch (error) {

        console.error(
            "Error al guardar respuestas:",
            error
        );


        mensaje.textContent =
            error.message ||
            "Ocurrió un error al enviar tus respuestas.";


        mensaje.className =
            "mensaje-error";


        btnSiguiente.disabled =
            false;

        btnAnterior.disabled =
            false;

    }

}


// =====================================================
// COMPROBAR SI EL USUARIO YA TIENE UN RESULTADO
// =====================================================

async function comprobarResultadoGuardado() {

    try {

        const respuesta =
            await fetch(
                "/api/test/resultado"
            );


        if (respuesta.status === 401) {

            window.location.href =
                "/login.html";

            return;

        }


        if (!respuesta.ok) {

            // Si ocurre algún problema,
            // permitimos hacer el test normalmente.

            cargarPreguntas();

            return;

        }


        const datos =
            await respuesta.json();


        // =============================================
        // NO TIENE RESULTADO
        // =============================================

        if (!datos.tieneResultado) {

            cargarPreguntas();

            return;

        }


        // =============================================
        // YA TIENE RESULTADO
        // =============================================

        mostrarResultadoGuardado(
            datos
        );


    } catch (error) {

        console.error(
            "Error al comprobar resultado:",
            error
        );


        // Si falla la comprobación,
        // dejamos que pueda hacer el test.

        cargarPreguntas();

    }

}


// =====================================================
// MOSTRAR RESULTADO GUARDADO
// =====================================================

function mostrarResultadoGuardado(datos) {

    preguntasContainer.style.display =
        "none";


    const progresoContenedor =
        document.querySelector(
            ".progreso-contenedor"
        );


    if (progresoContenedor) {

        progresoContenedor.style.display =
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


    resultadoContainer.style.display =
        "block";


    // =============================================
    // MOSTRAR ÁREA PRINCIPAL
    // =============================================

    if (
        datos.categoriaPrincipal
    ) {

        resultadoTexto.textContent =
            `Tu área principal es ${datos.categoriaPrincipal.nombre}, con un puntaje de ${datos.categoriaPrincipal.puntaje} puntos.`;

    } else {

        resultadoTexto.textContent =
            "Tu resultado vocacional está guardado.";

    }


    // =============================================
    // MOSTRAR CARRERAS
    // =============================================

    mostrarCarreras(
        datos.carreras
    );


    mensaje.textContent = "";

}


// =====================================================
// INICIAR TEST
// =====================================================

comprobarResultadoGuardado();