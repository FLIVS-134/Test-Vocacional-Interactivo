const formulario =
    document.getElementById("preguntaForm");

const inputPregunta =
    document.getElementById("pregunta");

const listaPreguntas =
    document.getElementById("listaPreguntas");

const mensaje =
    document.getElementById("mensaje");


async function cargarPreguntas() {

    try {

        const respuesta = await fetch(
            "/api/admin/preguntas"
        );

        if (respuesta.status === 401 ||
            respuesta.status === 403) {

            window.location.href =
                "/login.html";

            return;
        }

        const preguntas =
            await respuesta.json();

        listaPreguntas.innerHTML = "";

        preguntas.forEach((pregunta) => {

            const div =
                document.createElement("div");

            div.classList.add("pregunta-item");

            div.innerHTML = `
                <p>
                    <strong>
                        ${pregunta.id_pregunta}.
                    </strong>

                    ${pregunta.pregunta}
                </p>

                <button
                    onclick="editarPregunta(
                        ${pregunta.id_pregunta},
                        '${pregunta.pregunta.replace(/'/g, "\\'")}'
                    )"
                >
                    Editar
                </button>

                <button
                    onclick="eliminarPregunta(
                        ${pregunta.id_pregunta}
                    )"
                >
                    Eliminar
                </button>

                <hr>
            `;

            listaPreguntas.appendChild(div);

        });

    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "Error al cargar las preguntas.";

    }
}


formulario.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        const pregunta =
            inputPregunta.value.trim();

        if (!pregunta) {
            return;
        }

        const respuesta = await fetch(
            "/api/admin/preguntas",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    pregunta
                })
            }
        );

        const datos =
            await respuesta.json();

        mensaje.textContent =
            datos.mensaje;

        if (respuesta.ok) {

            inputPregunta.value = "";

            cargarPreguntas();
        }

    }
);


async function eliminarPregunta(id) {

    const confirmar =
        confirm(
            "¿Seguro que deseas eliminar esta pregunta?"
        );

    if (!confirmar) {
        return;
    }

    const respuesta = await fetch(
        `/api/admin/preguntas/${id}`,
        {
            method: "DELETE"
        }
    );

    const datos =
        await respuesta.json();

    mensaje.textContent =
        datos.mensaje;

    cargarPreguntas();
}


async function editarPregunta(id, preguntaActual) {

    const nuevaPregunta =
        prompt(
            "Editar pregunta:",
            preguntaActual
        );

    if (!nuevaPregunta) {
        return;
    }

    const respuesta = await fetch(
        `/api/admin/preguntas/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                pregunta: nuevaPregunta
            })
        }
    );

    const datos =
        await respuesta.json();

    mensaje.textContent =
        datos.mensaje;

    cargarPreguntas();
}


cargarPreguntas();