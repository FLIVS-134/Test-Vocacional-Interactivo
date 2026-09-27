-- =====================================================
-- TEST VOCACIONAL INTERACTIVO
-- Base de datos
-- =====================================================

CREATE DATABASE IF NOT EXISTS test_vocacional;

USE test_vocacional;


-- =====================================================
-- TABLA: roles
-- =====================================================

CREATE TABLE IF NOT EXISTS roles (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);


-- =====================================================
-- TABLA: usuarios
-- =====================================================

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    id_rol INT NOT NULL,

    FOREIGN KEY (id_rol)
        REFERENCES roles(id_rol)
);


-- =====================================================
-- TABLA: areas
-- =====================================================

CREATE TABLE IF NOT EXISTS areas (
    id_area INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT
);


-- =====================================================
-- TABLA: carreras
-- =====================================================

CREATE TABLE IF NOT EXISTS carreras (
    id_carrera INT AUTO_INCREMENT PRIMARY KEY,
    id_area INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,

    FOREIGN KEY (id_area)
        REFERENCES areas(id_area)
        ON DELETE CASCADE
);


-- =====================================================
-- TABLA: preguntas
-- =====================================================

CREATE TABLE IF NOT EXISTS preguntas (
    id_pregunta INT AUTO_INCREMENT PRIMARY KEY,
    pregunta TEXT NOT NULL,
    id_area INT NOT NULL,
    puntaje INT NOT NULL DEFAULT 1,

    FOREIGN KEY (id_area)
        REFERENCES areas(id_area)
);


-- =====================================================
-- TABLA: opciones
-- =====================================================

CREATE TABLE IF NOT EXISTS opciones (
    id_opcion INT AUTO_INCREMENT PRIMARY KEY,
    id_pregunta INT NOT NULL,
    texto VARCHAR(255) NOT NULL,
    puntaje INT NOT NULL DEFAULT 1,

    FOREIGN KEY (id_pregunta)
        REFERENCES preguntas(id_pregunta)
        ON DELETE CASCADE
);


-- =====================================================
-- TABLA: resultados
-- =====================================================

CREATE TABLE IF NOT EXISTS resultados (
    id_resultado INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    perfil VARCHAR(150),

    FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
        ON DELETE CASCADE
);


-- =====================================================
-- TABLA: respuestas
-- =====================================================

CREATE TABLE IF NOT EXISTS respuestas (
    id_respuesta INT AUTO_INCREMENT PRIMARY KEY,
    id_resultado INT NOT NULL,
    id_pregunta INT NOT NULL,
    respuesta VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_resultado)
        REFERENCES resultados(id_resultado)
        ON DELETE CASCADE,

    FOREIGN KEY (id_pregunta)
        REFERENCES preguntas(id_pregunta)
        ON DELETE CASCADE
);


-- =====================================================
-- TABLA: resultado_areas
-- =====================================================

CREATE TABLE IF NOT EXISTS resultado_areas (
    id_resultado_area INT AUTO_INCREMENT PRIMARY KEY,
    id_resultado INT NOT NULL,
    id_area INT NOT NULL,
    puntaje INT NOT NULL DEFAULT 0,
    posicion INT,

    FOREIGN KEY (id_resultado)
        REFERENCES resultados(id_resultado)
        ON DELETE CASCADE,

    FOREIGN KEY (id_area)
        REFERENCES areas(id_area)
);


-- =====================================================
-- INSERTAR ROLES
-- =====================================================

INSERT INTO roles (nombre)
VALUES
('usuario'),
('admin');


-- =====================================================
-- INSERTAR AREAS
-- =====================================================

INSERT INTO areas
(nombre, descripcion)
VALUES

(
    'Tecnología',
    'Área relacionada con programación, informática, sistemas y tecnología.'
),

(
    'Salud',
    'Área relacionada con medicina, enfermería, nutrición y bienestar.'
),

(
    'Ciencias',
    'Área relacionada con matemáticas, física, química, biología e investigación.'
),

(
    'Arte y Diseño',
    'Área relacionada con creatividad, diseño, comunicación visual y expresión artística.'
),

(
    'Ciencias Sociales',
    'Área relacionada con psicología, educación, derecho, sociología y sociedad.'
),

(
    'Administración y Negocios',
    'Área relacionada con empresas, administración, economía, finanzas y emprendimiento.'
);


-- =====================================================
-- INSERTAR CARRERAS
-- =====================================================

INSERT INTO carreras
(id_area, nombre, descripcion)
VALUES

(1, 'Ingeniería de Sistemas',
 'Diseño y desarrollo de sistemas informáticos.'),

(1, 'Ingeniería de Software',
 'Desarrollo y mantenimiento de aplicaciones y software.'),

(1, 'Ciencia de Datos',
 'Análisis de datos y desarrollo de soluciones basadas en información.'),


(2, 'Medicina',
 'Prevención, diagnóstico y tratamiento de enfermedades.'),

(2, 'Enfermería',
 'Cuidado integral y atención de pacientes.'),

(2, 'Nutrición',
 'Estudio de la alimentación y su relación con la salud.'),


(3, 'Matemáticas',
 'Estudio de estructuras, patrones y relaciones matemáticas.'),

(3, 'Biología',
 'Estudio de los seres vivos y sus procesos.'),

(3, 'Química',
 'Estudio de la materia y sus transformaciones.'),


(4, 'Diseño Gráfico',
 'Comunicación visual mediante elementos gráficos.'),

(4, 'Diseño Industrial',
 'Diseño y desarrollo de productos.'),

(4, 'Artes Visuales',
 'Expresión artística mediante diferentes medios visuales.'),


(5, 'Psicología',
 'Estudio del comportamiento y los procesos mentales.'),

(5, 'Derecho',
 'Estudio de las normas y sistemas jurídicos.'),

(5, 'Educación',
 'Formación y enseñanza de personas.'),


(6, 'Administración de Empresas',
 'Gestión y organización de empresas.'),

(6, 'Contaduría Pública',
 'Gestión financiera, contable y tributaria.'),

(6, 'Economía',
 'Estudio de la producción, distribución y consumo de recursos.');