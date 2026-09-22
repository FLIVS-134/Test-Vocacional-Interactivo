const db = require("../config/database");

// ==========================================
// OBTENER TODAS LAS CATEGORÍAS
// ==========================================

async function obtenerCategorias() {

const [filas] = await db.query(`
    SELECT
        id_categoria,
        nombre,
        descripcion
    FROM categorias
    ORDER BY id_categoria ASC
`);

return filas;

}

// ==========================================
// OBTENER CATEGORÍA POR ID
// ==========================================

async function obtenerCategoriaPorId(id) {

const [filas] = await db.query(
    `
    SELECT
        id_categoria,
        nombre,
        descripcion
    FROM categorias
    WHERE id_categoria = ?
    `,
    [id]
);

return filas[0];

}

// ==========================================
// EXPORTAR
// ==========================================

module.exports = {
obtenerCategorias,
obtenerCategoriaPorId
};
