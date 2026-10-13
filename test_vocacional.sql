-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2026 a las 00:12:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test_vocacional`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id_carrera` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id_carrera`, `nombre`, `descripcion`, `id_categoria`) VALUES
(1, 'Ingeniería de Sistemas', 'Carrera enfocada en el desarrollo de software, sistemas de información y tecnología.', 1),
(2, 'Ingeniería de Software', 'Carrera enfocada en el diseño, desarrollo y mantenimiento de aplicaciones y sistemas.', 1),
(3, 'Tecnología en Desarrollo de Software', 'Formación orientada al desarrollo de aplicaciones y soluciones tecnológicas.', 1),
(4, 'Ingeniería Industrial', 'Carrera enfocada en procesos, producción, optimización y gestión empresarial.', 2),
(5, 'Ingeniería Civil', 'Carrera relacionada con infraestructura, construcción y obras civiles.', 2),
(6, 'Ingeniería Electrónica', 'Carrera relacionada con sistemas electrónicos, automatización y tecnología.', 2),
(7, 'Medicina', 'Carrera orientada al diagnóstico, prevención y tratamiento de enfermedades.', 3),
(8, 'Enfermería', 'Carrera enfocada en el cuidado integral de los pacientes.', 3),
(9, 'Psicología', 'Carrera dedicada al estudio del comportamiento y los procesos mentales.', 3),
(10, 'Biología', 'Carrera enfocada en el estudio de los seres vivos y los procesos biológicos.', 4),
(11, 'Química', 'Carrera relacionada con el estudio de la materia y sus transformaciones.', 4),
(12, 'Matemáticas', 'Carrera centrada en el análisis, razonamiento lógico y estructuras matemáticas.', 4),
(13, 'Derecho', 'Carrera relacionada con las leyes, justicia y organización jurídica de la sociedad.', 5),
(14, 'Sociología', 'Carrera dedicada al estudio de la sociedad y las relaciones sociales.', 5),
(15, 'Filosofía', 'Carrera enfocada en el pensamiento crítico, conocimiento y reflexión.', 5),
(16, 'Diseño Gráfico', 'Carrera orientada a la comunicación visual y creación de piezas gráficas.', 6),
(17, 'Diseño Industrial', 'Carrera enfocada en el diseño y desarrollo de productos.', 6),
(18, 'Artes Visuales', 'Carrera relacionada con la expresión artística mediante diferentes medios visuales.', 6),
(19, 'Administración de Empresas', 'Carrera enfocada en la gestión y administración de organizaciones.', 7),
(20, 'Contaduría Pública', 'Carrera relacionada con contabilidad, finanzas y gestión económica.', 7),
(21, 'Economía', 'Carrera enfocada en el análisis de los fenómenos económicos.', 7),
(22, 'Licenciatura en Educación', 'Carrera orientada a la enseñanza y formación educativa.', 8),
(23, 'Licenciatura en Educación Infantil', 'Carrera enfocada en la educación y desarrollo de niños.', 8),
(24, 'Ciencia de Datos', 'Carrera enfocada en el análisis de datos, estadística, programación y extracción de información para apoyar la toma de decisiones.', 1),
(25, 'Ciberseguridad', 'Carrera orientada a la protección de sistemas, redes, aplicaciones y datos frente a amenazas digitales.', 1),
(26, 'Ingeniería de Telecomunicaciones', 'Carrera relacionada con las comunicaciones digitales, redes, transmisión de datos y tecnologías de telecomunicación.', 1),
(27, 'Ingeniería Mecánica', 'Carrera enfocada en el diseño, análisis, fabricación y mantenimiento de máquinas y sistemas mecánicos.', 2),
(28, 'Ingeniería Ambiental', 'Carrera orientada a la protección del medio ambiente, gestión de recursos naturales y solución de problemas ambientales.', 2),
(29, 'Fisioterapia', 'Carrera enfocada en la prevención, evaluación y recuperación del movimiento y funcionamiento físico de las personas.', 3),
(30, 'Nutrición y Dietética', 'Carrera relacionada con la alimentación, nutrición, prevención de enfermedades y promoción de hábitos saludables.', 3),
(31, 'Física', 'Carrera dedicada al estudio de la materia, la energía, el movimiento y las leyes fundamentales de la naturaleza.', 4),
(32, 'Estadística', 'Carrera enfocada en la recolección, análisis e interpretación de datos para resolver problemas y apoyar decisiones.', 4),
(33, 'Historia', 'Carrera dedicada al estudio de los acontecimientos, procesos y transformaciones de las sociedades a través del tiempo.', 5),
(34, 'Lenguas Modernas', 'Carrera orientada al aprendizaje, análisis y enseñanza de diferentes idiomas y culturas.', 5),
(35, 'Arquitectura', 'Carrera relacionada con el diseño y planificación de espacios, edificaciones y entornos para las personas.', 6),
(36, 'Comunicación Audiovisual', 'Carrera enfocada en la creación y producción de contenidos audiovisuales para diferentes medios y plataformas.', 6),
(37, 'Mercadeo', 'Carrera enfocada en estrategias de mercado, comportamiento del consumidor, publicidad y posicionamiento de productos y servicios.', 7),
(38, 'Negocios Internacionales', 'Carrera relacionada con comercio internacional, negocios globales, mercados y relaciones empresariales entre países.', 7),
(39, 'Educación Especial', 'Carrera orientada a la atención educativa de personas con diferentes necesidades y capacidades de aprendizaje.', 8),
(40, 'Pedagogía', 'Carrera enfocada en los procesos de enseñanza, aprendizaje, formación y desarrollo educativo.', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'Tecnología', 'Área relacionada con informática, programación, sistemas y tecnología.'),
(2, 'Ingeniería', 'Área relacionada con el diseño, construcción y solución de problemas técnicos.'),
(3, 'Salud', 'Área relacionada con el cuidado, prevención y atención de la salud.'),
(4, 'Ciencias', 'Área relacionada con la investigación y el estudio científico.'),
(5, 'Humanidades', 'Área relacionada con el pensamiento, la cultura, la sociedad y las personas.'),
(6, 'Arte y Diseño', 'Área relacionada con la creatividad, expresión artística y diseño.'),
(7, 'Administración y Negocios', 'Área relacionada con empresas, administración, economía y negocios.'),
(8, 'Educación', 'Área relacionada con la enseñanza, formación y desarrollo de personas.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversaciones_flivs`
--

CREATE TABLE `conversaciones_flivs` (
  `id_conversacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `conversaciones_flivs`
--

INSERT INTO `conversaciones_flivs` (`id_conversacion`, `id_usuario`, `pregunta`, `respuesta`, `fecha`) VALUES
(1, 2, '¿Qué hace un ingeniero de sistemas?', 'Un ingeniero de sistemas (también conocido como ingeniero de sistemas informáticos o ingeniero de desarrollo de sistemas) diseña, desarrolla e integra soluciones tecnológicas que permiten a las organizaciones recopilar, procesar, almacenar y compartir información de manera eficiente.\n\n### Actividades principales\n\n| Área | Tareas típicas | Ejemplo de trabajo |\n|------|----------------|-----------------|\n| **Análisis y diseño de sistemas** | • Recopilar requisitos de los usuarios y partes interesadas.<br>• Modelar flujos de trabajo, procesos y arquitectura de datos.<br>• Crear documentos de diseño y esquemas. | Diseñar un nuevo sistema de gestión de recursos humanos que reemplace las hojas de cálculo manuales existentes. |\n| **Desarrollo de software y hardware** | • Escribir código para aplicaciones, interfaces y componentes de sistemas embebidos.<br>• Probar y depurar programas.<br>• Colaborar con ingenieros de hardware en el diseño de circuitos, placas de sensores y routers. | Desarrollar una interfaz que recopile datos de sensores IoT para una planta de tratamiento de agua. |\n| **Integración y prueba** | • Combinar módulos de software, componentes externos y sistemas heredados.<br>• Realizar pruebas unitarias, de integración y de sistema para asegurar el correcto funcionamiento. | Integrar un servicio en la nube con el sistema de puntos de venta existente de un minorista. |\n| **Redes y seguridad** | • Diseñar, configurar y mantener redes locales y WAN.<br>• Implementar firewalls, controles de acceso y monitoreo de amenazas. | Configurar una red segura y de alta disponibilidad para una cadena de tiendas. |\n| **Mantenimiento y soporte técnico** | • Supervisar el rendimiento del sistema y realizar actualizaciones.<br>• Brindar soporte técnico a los usuarios y resolver problemas. | Realizar actualizaciones periódicas del sistema operativo en los servidores y brindar soporte a los usuarios. |\n| **Gestión de proyectos y documentación** | • Planificar cronogramas, presupuestos y recursos.<br>• Documentar procedimientos operativos estándar y guías de usuario. | Liderar un proyecto de seis meses para implementar un nuevo CRM en toda la empresa. |\n| **Consideraciones éticas y regulatorias** | • Asegurar que los sistemas cumplan con las leyes de privacidad (por ejemplo, GDPR, CCPA).<br>• Considerar el impacto de los sistemas en la equidad, la accesibilidad y la sostenibilidad. | Realizar una evaluación de impacto de datos para un sistema que recopila información personal de los pacientes. |\n\n### Industrias típicas\n\n- **Tecnología y servicios en la nube** – Diseñar servicios escalables, microservicios y plataformas SaaS.\n- **Manufactura** – Crear sistemas de control de automatización y equipos embebidos.\n- **Salud** – Desarrollar sistemas de registros de salud electrónicos y dispositivos médicos conectados.\n- **Finanzas** – Diseñar plataformas de comercio electrónico seguras, sistemas de procesamiento de pagos y motores de análisis de riesgos.\n- **Gobierno** – Construir infraestructura de redes a gran escala, sistemas de gestión de datos para servicios públicos y bases de datos de registro civil seguras.\n- **Educación** – Implementar plataformas de aprendizaje en línea, sistemas de gestión de aprendizaje y laboratorios de investigación.\n\n### Habilidades que suelen ser necesarias\n\n- **Habilidades analíticas y de resolución de problemas**: Desglosar problemas complejos en partes manejables.\n- **Conocimientos técnicos**: Programación (Python, Java, C++, JavaScript), scripts para la gestión de sistemas (Shell, PowerShell), bases de datos (SQL, NoSQL), virtualización en la nube (AWS, Azure, GCP) y frameworks de redes.\n- **Comprensión de procesos de negocio**: Ser capaz de traducir las necesidades comerciales en especificaciones técnicas.\n- **Trabajo en equipo y comunicación**: Colaborar con desarrolladores, diseñadores gráficos, gerentes de productos y clientes.\n- **Gestión del ciclo de vida de proyectos**: Herramientas de gestión ágil (Jira, Confluence), methodologies Scrum o Kanban.\n- **Atenuación de riesgos y seguridad**: Comprender las mejores prácticas de seguridad, las pruebas de penetración y los controles de cumplimiento.\n\n### Posibles trayectorias de desarrollo profesional\n\n- **Ingeniero junior → Ingeniero senior** – Adquirir experiencia en un dominio técnico específico o en liderazgo de equipos.\n- **Arquitecto de sistemas** – Diseñar soluciones de alto nivel que abarquen múltiples proyectos o grandes plataformas.\n- **Gerente de proyecto / Director de producto** – Pasar a la gestión de equipos o de productos, supervigilando múltiples proyectos técnicos.\n- **Consultor de TI / Entrenador técnico** – Brindar asesoramiento a las organizaciones sobre mejores prácticas de ingeniería.\n\n---\n\n### ¿Qué NO incluye el rol?\n\n- **\"Ser el mejor ingeniero\"**: El término \"ingeniero de sistemas\" describe un conjunto de responsabilidades, no un juicio de superioridad.\n- **Solucionar todos los problemas técnicos**: Mientras que el ingeniero es experto en integrar y mantener los sistemas, otros roles (por ejemplo, administradores de base de datos, administradores de seguridad) pueden manejar dominios específicos.\n\n---\n\n**Consejo:** Dado que las tecnologías, las herramientas y los requisitos comerciales específicos de la industria evolucionan rápidamente, es recomendable consultar la página web oficial de la universidad, los portales profesionales de ingeniería o el sitio web de la institución para obtener información actualizada y detalles sobre el plan de estudios, certificaciones y posibles caminos profesionales.\n\n¿Hay alguna parte de la labor de un ingeniero de sistemas que te gustaría explorar más a fondo?', '2026-09-28 17:04:35'),
(2, 2, '¿Qué hace un ingeniero de sistemas?', 'Un **ingeniero de sistemas** (también llamado ingeniero en sistemas, ingeniería de software o ingeniería en informática, según el país y la universidad) diseña, desarrolla, implementa y gestiona soluciones tecnológicas. Entre sus funciones generales están:\n\n- **Analizar** necesidades de una organización y proponer soluciones tecnológicas.\n- **Desarrollar** aplicaciones, plataformas, bases de datos y sistemas de información.\n- **Administrar** infraestructura tecnológica: redes, servidores, seguridad y servicios en la nube.\n- **Gestionar** proyectos tecnológicos y coordinar equipos de trabajo.\n- **Integrar** sistemas para que funcionen juntos de forma eficiente.\n\n**Importante:** El alcance exacto varía mucho según la universidad y el país. Algunos programas son más cercanos al software, otros incluyen redes/hardware, y otros enfocan en gestión de TI.\n\nSi estás evaluando esta opción, te sugiero:\n1. Revisar el **plan de estudios** de las universidades que te interesan.\n2. Preguntar a profesionales del área cómo es su día a día.\n3. Comparar con carreras afines (ingeniería de software, ciencia de datos, TI, etc.) para ver cuál se ajusta más a tus intereses.\n\n¿Te gustaría que compare esta carrera con alguna otra en específico?', '2026-09-28 17:11:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones`
--

CREATE TABLE `opciones` (
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `texto_opcion` varchar(255) NOT NULL,
  `valor` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `opciones`
--

INSERT INTO `opciones` (`id_opcion`, `id_pregunta`, `texto_opcion`, `valor`) VALUES
(1, 1, 'No me interesa', 1),
(2, 1, 'Me interesa poco', 2),
(3, 1, 'Me interesa', 3),
(4, 1, 'Me interesa bastante', 4),
(5, 1, 'Me interesa mucho', 5),
(6, 2, 'No me interesa', 1),
(7, 2, 'Me interesa poco', 2),
(8, 2, 'Me interesa', 3),
(9, 2, 'Me interesa bastante', 4),
(10, 2, 'Me interesa mucho', 5),
(11, 3, 'No me interesa', 1),
(12, 3, 'Me interesa poco', 2),
(13, 3, 'Me interesa', 3),
(14, 3, 'Me interesa bastante', 4),
(15, 3, 'Me interesa mucho', 5),
(16, 4, 'No me interesa', 1),
(17, 4, 'Me interesa poco', 2),
(18, 4, 'Me interesa', 3),
(19, 4, 'Me interesa bastante', 4),
(20, 4, 'Me interesa mucho', 5),
(21, 5, 'No me interesa', 1),
(22, 5, 'Me interesa poco', 2),
(23, 5, 'Me interesa', 3),
(24, 5, 'Me interesa bastante', 4),
(25, 5, 'Me interesa mucho', 5),
(26, 6, 'No me interesa', 1),
(27, 6, 'Me interesa poco', 2),
(28, 6, 'Me interesa', 3),
(29, 6, 'Me interesa bastante', 4),
(30, 6, 'Me interesa mucho', 5),
(31, 7, 'No me interesa', 1),
(32, 7, 'Me interesa poco', 2),
(33, 7, 'Me interesa', 3),
(34, 7, 'Me interesa bastante', 4),
(35, 7, 'Me interesa mucho', 5),
(36, 8, 'No me interesa', 1),
(37, 8, 'Me interesa poco', 2),
(38, 8, 'Me interesa', 3),
(39, 8, 'Me interesa bastante', 4),
(40, 8, 'Me interesa mucho', 5),
(41, 9, 'No me interesa', 1),
(42, 9, 'Me interesa poco', 2),
(43, 9, 'Me interesa', 3),
(44, 9, 'Me interesa bastante', 4),
(45, 9, 'Me interesa mucho', 5),
(46, 10, 'No me interesa', 1),
(47, 10, 'Me interesa poco', 2),
(48, 10, 'Me interesa', 3),
(49, 10, 'Me interesa bastante', 4),
(50, 10, 'Me interesa mucho', 5),
(51, 11, 'No me interesa', 1),
(52, 11, 'Me interesa poco', 2),
(53, 11, 'Me interesa', 3),
(54, 11, 'Me interesa bastante', 4),
(55, 11, 'Me interesa mucho', 5),
(56, 12, 'No me interesa', 1),
(57, 12, 'Me interesa poco', 2),
(58, 12, 'Me interesa', 3),
(59, 12, 'Me interesa bastante', 4),
(60, 12, 'Me interesa mucho', 5),
(61, 13, 'No me interesa', 1),
(62, 13, 'Me interesa poco', 2),
(63, 13, 'Me interesa', 3),
(64, 13, 'Me interesa bastante', 4),
(65, 13, 'Me interesa mucho', 5),
(66, 14, 'No me interesa', 1),
(67, 14, 'Me interesa poco', 2),
(68, 14, 'Me interesa', 3),
(69, 14, 'Me interesa bastante', 4),
(70, 14, 'Me interesa mucho', 5),
(71, 15, 'No me interesa', 1),
(72, 15, 'Me interesa poco', 2),
(73, 15, 'Me interesa', 3),
(74, 15, 'Me interesa bastante', 4),
(75, 15, 'Me interesa mucho', 5),
(76, 16, 'No me interesa', 1),
(77, 16, 'Me interesa poco', 2),
(78, 16, 'Me interesa', 3),
(79, 16, 'Me interesa bastante', 4),
(80, 16, 'Me interesa mucho', 5),
(81, 17, 'No me interesa', 1),
(82, 17, 'Me interesa poco', 2),
(83, 17, 'Me interesa', 3),
(84, 17, 'Me interesa bastante', 4),
(85, 17, 'Me interesa mucho', 5),
(86, 18, 'No me interesa', 1),
(87, 18, 'Me interesa poco', 2),
(88, 18, 'Me interesa', 3),
(89, 18, 'Me interesa bastante', 4),
(90, 18, 'Me interesa mucho', 5),
(91, 19, 'No me interesa', 1),
(92, 19, 'Me interesa poco', 2),
(93, 19, 'Me interesa', 3),
(94, 19, 'Me interesa bastante', 4),
(95, 19, 'Me interesa mucho', 5),
(96, 20, 'No me interesa', 1),
(97, 20, 'Me interesa poco', 2),
(98, 20, 'Me interesa', 3),
(99, 20, 'Me interesa bastante', 4),
(100, 20, 'Me interesa mucho', 5),
(101, 21, 'No me interesa', 1),
(102, 21, 'Me interesa poco', 2),
(103, 21, 'Me interesa', 3),
(104, 21, 'Me interesa bastante', 4),
(105, 21, 'Me interesa mucho', 5),
(106, 22, 'No me interesa', 1),
(107, 22, 'Me interesa poco', 2),
(108, 22, 'Me interesa', 3),
(109, 22, 'Me interesa bastante', 4),
(110, 22, 'Me interesa mucho', 5),
(111, 23, 'No me interesa', 1),
(112, 23, 'Me interesa poco', 2),
(113, 23, 'Me interesa', 3),
(114, 23, 'Me interesa bastante', 4),
(115, 23, 'Me interesa mucho', 5),
(116, 24, 'No me interesa', 1),
(117, 24, 'Me interesa poco', 2),
(118, 24, 'Me interesa', 3),
(119, 24, 'Me interesa bastante', 4),
(120, 24, 'Me interesa mucho', 5),
(121, 25, 'No me interesa', 1),
(122, 25, 'Me interesa poco', 2),
(123, 25, 'Me interesa', 3),
(124, 25, 'Me interesa bastante', 4),
(125, 25, 'Me interesa mucho', 5),
(126, 26, 'No me interesa', 1),
(127, 26, 'Me interesa poco', 2),
(128, 26, 'Me interesa', 3),
(129, 26, 'Me interesa bastante', 4),
(130, 26, 'Me interesa mucho', 5),
(131, 27, 'No me interesa', 1),
(132, 27, 'Me interesa poco', 2),
(133, 27, 'Me interesa', 3),
(134, 27, 'Me interesa bastante', 4),
(135, 27, 'Me interesa mucho', 5),
(136, 28, 'No me interesa', 1),
(137, 28, 'Me interesa poco', 2),
(138, 28, 'Me interesa', 3),
(139, 28, 'Me interesa bastante', 4),
(140, 28, 'Me interesa mucho', 5),
(141, 29, 'No me interesa', 1),
(142, 29, 'Me interesa poco', 2),
(143, 29, 'Me interesa', 3),
(144, 29, 'Me interesa bastante', 4),
(145, 29, 'Me interesa mucho', 5),
(146, 30, 'No me interesa', 1),
(147, 30, 'Me interesa poco', 2),
(148, 30, 'Me interesa', 3),
(149, 30, 'Me interesa bastante', 4),
(150, 30, 'Me interesa mucho', 5),
(151, 31, 'No me interesa', 1),
(152, 31, 'Me interesa poco', 2),
(153, 31, 'Me interesa', 3),
(154, 31, 'Me interesa bastante', 4),
(155, 31, 'Me interesa mucho', 5),
(156, 32, 'No me interesa', 1),
(157, 32, 'Me interesa poco', 2),
(158, 32, 'Me interesa', 3),
(159, 32, 'Me interesa bastante', 4),
(160, 32, 'Me interesa mucho', 5),
(161, 33, 'No me interesa', 1),
(162, 33, 'Me interesa poco', 2),
(163, 33, 'Me interesa', 3),
(164, 33, 'Me interesa bastante', 4),
(165, 33, 'Me interesa mucho', 5),
(166, 34, 'No me interesa', 1),
(167, 34, 'Me interesa poco', 2),
(168, 34, 'Me interesa', 3),
(169, 34, 'Me interesa bastante', 4),
(170, 34, 'Me interesa mucho', 5),
(171, 35, 'No me interesa', 1),
(172, 35, 'Me interesa poco', 2),
(173, 35, 'Me interesa', 3),
(174, 35, 'Me interesa bastante', 4),
(175, 35, 'Me interesa mucho', 5),
(176, 36, 'No me interesa', 1),
(177, 36, 'Me interesa poco', 2),
(178, 36, 'Me interesa', 3),
(179, 36, 'Me interesa bastante', 4),
(180, 36, 'Me interesa mucho', 5),
(181, 37, 'No me interesa', 1),
(182, 37, 'Me interesa poco', 2),
(183, 37, 'Me interesa', 3),
(184, 37, 'Me interesa bastante', 4),
(185, 37, 'Me interesa mucho', 5),
(186, 38, 'No me interesa', 1),
(187, 38, 'Me interesa poco', 2),
(188, 38, 'Me interesa', 3),
(189, 38, 'Me interesa bastante', 4),
(190, 38, 'Me interesa mucho', 5),
(191, 39, 'No me interesa', 1),
(192, 39, 'Me interesa poco', 2),
(193, 39, 'Me interesa', 3),
(194, 39, 'Me interesa bastante', 4),
(195, 39, 'Me interesa mucho', 5),
(196, 40, 'No me interesa', 1),
(197, 40, 'Me interesa poco', 2),
(198, 40, 'Me interesa', 3),
(199, 40, 'Me interesa bastante', 4),
(200, 40, 'Me interesa mucho', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id_pregunta` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id_pregunta`, `pregunta`, `id_categoria`, `estado`) VALUES
(1, '¿Qué tanto disfrutas resolver problemas utilizando computadores y herramientas digitales?', 1, 'activo'),
(2, '¿Qué tanto te interesa aprender a programar o crear aplicaciones?', 1, 'activo'),
(3, '¿Qué tanto disfrutas analizar datos para encontrar patrones o soluciones?', 1, 'activo'),
(4, '¿Qué tanto te interesa conocer cómo funcionan las redes, sistemas y tecnologías digitales?', 1, 'activo'),
(5, '¿Qué tanto te gustaría trabajar en la protección de información y sistemas contra amenazas digitales?', 1, 'activo'),
(6, '¿Qué tanto disfrutas diseñar o construir soluciones para problemas prácticos?', 2, 'activo'),
(7, '¿Qué tanto te interesan las máquinas, estructuras y sistemas físicos?', 2, 'activo'),
(8, '¿Qué tanto disfrutas analizar cómo mejorar procesos para hacerlos más eficientes?', 2, 'activo'),
(9, '¿Qué tanto te interesa trabajar con herramientas, materiales y tecnología para crear soluciones?', 2, 'activo'),
(10, '¿Qué tanto te interesa buscar soluciones a problemas relacionados con el medio ambiente y la infraestructura?', 2, 'activo'),
(11, '¿Qué tanto te interesa ayudar a las personas a cuidar y mejorar su salud?', 3, 'activo'),
(12, '¿Qué tanto te interesa conocer cómo funciona el cuerpo humano?', 3, 'activo'),
(13, '¿Qué tanto disfrutas escuchar y comprender los problemas personales de otras personas?', 3, 'activo'),
(14, '¿Qué tanto te gustaría participar en procesos de recuperación física de pacientes?', 3, 'activo'),
(15, '¿Qué tanto te interesa la alimentación y su relación con la salud y el bienestar?', 3, 'activo'),
(16, '¿Qué tanto disfrutas investigar y descubrir cómo funcionan los fenómenos naturales?', 4, 'activo'),
(17, '¿Qué tanto te interesa estudiar los seres vivos y sus características?', 4, 'activo'),
(18, '¿Qué tanto disfrutas realizar experimentos para comprobar ideas?', 4, 'activo'),
(19, '¿Qué tanto disfrutas trabajar con números, fórmulas y razonamiento lógico?', 4, 'activo'),
(20, '¿Qué tanto te interesa analizar datos para obtener conclusiones?', 4, 'activo'),
(21, '¿Qué tanto disfrutas reflexionar sobre las personas, la sociedad y sus ideas?', 5, 'activo'),
(22, '¿Qué tanto te interesa conocer la historia y evolución de las sociedades?', 5, 'activo'),
(23, '¿Qué tanto disfrutas debatir sobre temas sociales, culturales y políticos?', 5, 'activo'),
(24, '¿Qué tanto te interesa analizar diferentes formas de pensar y comprender el mundo?', 5, 'activo'),
(25, '¿Qué tanto te interesan los idiomas y las diferentes culturas?', 5, 'activo'),
(26, '¿Qué tanto disfrutas crear dibujos, diseños o composiciones visuales?', 6, 'activo'),
(27, '¿Qué tanto te interesa expresar ideas mediante imágenes, colores y formas?', 6, 'activo'),
(28, '¿Qué tanto disfrutas imaginar y diseñar nuevos productos o espacios?', 6, 'activo'),
(29, '¿Qué tanto te interesa la creación de fotografías, videos y contenidos audiovisuales?', 6, 'activo'),
(30, '¿Qué tanto disfrutas combinar creatividad con soluciones funcionales?', 6, 'activo'),
(31, '¿Qué tanto te interesa organizar y administrar proyectos o actividades?', 7, 'activo'),
(32, '¿Qué tanto disfrutas tomar decisiones para alcanzar objetivos?', 7, 'activo'),
(33, '¿Qué tanto te interesan las empresas, los negocios y la economía?', 7, 'activo'),
(34, '¿Qué tanto te interesa comprender qué motiva a las personas a comprar productos o servicios?', 7, 'activo'),
(35, '¿Qué tanto te gustaría trabajar con empresas y mercados de diferentes países?', 7, 'activo'),
(36, '¿Qué tanto disfrutas enseñar algo que conoces a otras personas?', 8, 'activo'),
(37, '¿Qué tanto te interesa acompañar el aprendizaje y desarrollo de otras personas?', 8, 'activo'),
(38, '¿Qué tanto disfrutas explicar temas de diferentes maneras para ayudar a comprenderlos?', 8, 'activo'),
(39, '¿Qué tanto te interesa trabajar con niños, jóvenes o personas con diferentes necesidades educativas?', 8, 'activo'),
(40, '¿Qué tanto te gustaría contribuir a mejorar la educación y los procesos de aprendizaje?', 8, 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id_respuesta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL,
  `fecha_respuesta` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id_respuesta`, `id_usuario`, `id_pregunta`, `id_opcion`, `fecha_respuesta`) VALUES
(1, 1, 1, 1, '2026-09-14 19:44:54'),
(2, 1, 2, 7, '2026-09-14 19:44:54'),
(3, 1, 3, 12, '2026-09-14 19:44:54'),
(4, 1, 4, 18, '2026-09-14 19:44:54'),
(5, 1, 5, 23, '2026-09-14 19:44:54'),
(6, 1, 6, 26, '2026-09-14 19:44:54'),
(7, 1, 7, 34, '2026-09-14 19:44:54'),
(8, 1, 8, 37, '2026-09-14 19:44:54'),
(9, 1, 9, 41, '2026-09-14 19:44:54'),
(10, 1, 10, 46, '2026-09-14 19:44:54'),
(11, 1, 11, 53, '2026-09-14 19:44:54'),
(12, 1, 12, 56, '2026-09-14 19:44:54'),
(13, 1, 13, 62, '2026-09-14 19:44:54'),
(14, 1, 14, 68, '2026-09-14 19:44:54'),
(15, 1, 15, 71, '2026-09-14 19:44:54'),
(16, 1, 16, 76, '2026-09-14 19:44:54'),
(17, 1, 17, 82, '2026-09-14 19:44:54'),
(18, 1, 18, 90, '2026-09-14 19:44:54'),
(19, 1, 19, 93, '2026-09-14 19:44:54'),
(20, 1, 20, 96, '2026-09-14 19:44:54'),
(21, 1, 21, 104, '2026-09-14 19:44:54'),
(22, 1, 22, 107, '2026-09-14 19:44:54'),
(23, 1, 23, 113, '2026-09-14 19:44:54'),
(24, 1, 24, 120, '2026-09-14 19:44:54'),
(25, 1, 25, 123, '2026-09-14 19:44:54'),
(26, 1, 26, 126, '2026-09-14 19:44:54'),
(27, 1, 27, 133, '2026-09-14 19:44:54'),
(28, 1, 28, 137, '2026-09-14 19:44:54'),
(29, 1, 29, 141, '2026-09-14 19:44:54'),
(30, 1, 30, 147, '2026-09-14 19:44:54'),
(31, 1, 31, 155, '2026-09-14 19:44:54'),
(32, 1, 32, 156, '2026-09-14 19:44:54'),
(33, 1, 33, 161, '2026-09-14 19:44:54'),
(34, 1, 34, 168, '2026-09-14 19:44:54'),
(35, 1, 35, 175, '2026-09-14 19:44:54'),
(36, 1, 36, 178, '2026-09-14 19:44:54'),
(37, 1, 37, 185, '2026-09-14 19:44:54'),
(38, 1, 38, 190, '2026-09-14 19:44:54'),
(39, 1, 39, 191, '2026-09-14 19:44:54'),
(40, 1, 40, 196, '2026-09-14 19:44:54'),
(41, 2, 1, 1, '2026-09-14 20:06:12'),
(42, 2, 2, 7, '2026-09-14 20:06:12'),
(43, 2, 3, 14, '2026-09-14 20:06:12'),
(44, 2, 4, 19, '2026-09-14 20:06:12'),
(45, 2, 5, 24, '2026-09-14 20:06:12'),
(46, 2, 6, 27, '2026-09-14 20:06:12'),
(47, 2, 7, 31, '2026-09-14 20:06:12'),
(48, 2, 8, 37, '2026-09-14 20:06:12'),
(49, 2, 9, 43, '2026-09-14 20:06:12'),
(50, 2, 10, 46, '2026-09-14 20:06:12'),
(51, 2, 11, 53, '2026-09-14 20:06:12'),
(52, 2, 12, 58, '2026-09-14 20:06:12'),
(53, 2, 13, 65, '2026-09-14 20:06:12'),
(54, 2, 14, 66, '2026-09-14 20:06:12'),
(55, 2, 15, 72, '2026-09-14 20:06:12'),
(56, 2, 16, 77, '2026-09-14 20:06:12'),
(57, 2, 17, 84, '2026-09-14 20:06:12'),
(58, 2, 18, 87, '2026-09-14 20:06:12'),
(59, 2, 19, 91, '2026-09-14 20:06:12'),
(60, 2, 20, 99, '2026-09-14 20:06:12'),
(61, 2, 21, 103, '2026-09-14 20:06:12'),
(62, 2, 22, 107, '2026-09-14 20:06:12'),
(63, 2, 23, 114, '2026-09-14 20:06:12'),
(64, 2, 24, 119, '2026-09-14 20:06:12'),
(65, 2, 25, 122, '2026-09-14 20:06:12'),
(66, 2, 26, 126, '2026-09-14 20:06:12'),
(67, 2, 27, 132, '2026-09-14 20:06:12'),
(68, 2, 28, 137, '2026-09-14 20:06:12'),
(69, 2, 29, 141, '2026-09-14 20:06:12'),
(70, 2, 30, 148, '2026-09-14 20:06:12'),
(71, 2, 31, 152, '2026-09-14 20:06:12'),
(72, 2, 32, 159, '2026-09-14 20:06:12'),
(73, 2, 33, 162, '2026-09-14 20:06:12'),
(74, 2, 34, 169, '2026-09-14 20:06:12'),
(75, 2, 35, 174, '2026-09-14 20:06:12'),
(76, 2, 36, 179, '2026-09-14 20:06:12'),
(77, 2, 37, 184, '2026-09-14 20:06:12'),
(78, 2, 38, 189, '2026-09-14 20:06:12'),
(79, 2, 39, 194, '2026-09-14 20:06:12'),
(80, 2, 40, 199, '2026-09-14 20:06:12'),
(81, 2, 1, 3, '2026-09-14 20:13:56'),
(82, 2, 2, 7, '2026-09-14 20:13:56'),
(83, 2, 3, 13, '2026-09-14 20:13:56'),
(84, 2, 4, 19, '2026-09-14 20:13:56'),
(85, 2, 5, 21, '2026-09-14 20:13:56'),
(86, 2, 6, 28, '2026-09-14 20:13:56'),
(87, 2, 7, 32, '2026-09-14 20:13:56'),
(88, 2, 8, 40, '2026-09-14 20:13:56'),
(89, 2, 9, 43, '2026-09-14 20:13:56'),
(90, 2, 10, 48, '2026-09-14 20:13:56'),
(91, 2, 11, 55, '2026-09-14 20:13:56'),
(92, 2, 12, 58, '2026-09-14 20:13:56'),
(93, 2, 13, 65, '2026-09-14 20:13:56'),
(94, 2, 14, 68, '2026-09-14 20:13:56'),
(95, 2, 15, 73, '2026-09-14 20:13:56'),
(96, 2, 16, 78, '2026-09-14 20:13:56'),
(97, 2, 17, 83, '2026-09-14 20:13:56'),
(98, 2, 18, 88, '2026-09-14 20:13:56'),
(99, 2, 19, 93, '2026-09-14 20:13:56'),
(100, 2, 20, 98, '2026-09-14 20:13:56'),
(101, 2, 21, 105, '2026-09-14 20:13:56'),
(102, 2, 22, 110, '2026-09-14 20:13:56'),
(103, 2, 23, 113, '2026-09-14 20:13:56'),
(104, 2, 24, 118, '2026-09-14 20:13:56'),
(105, 2, 25, 125, '2026-09-14 20:13:56'),
(106, 2, 26, 127, '2026-09-14 20:13:56'),
(107, 2, 27, 133, '2026-09-14 20:13:56'),
(108, 2, 28, 139, '2026-09-14 20:13:56'),
(109, 2, 29, 143, '2026-09-14 20:13:56'),
(110, 2, 30, 150, '2026-09-14 20:13:56'),
(111, 2, 31, 155, '2026-09-14 20:13:56'),
(112, 2, 32, 160, '2026-09-14 20:13:56'),
(113, 2, 33, 165, '2026-09-14 20:13:56'),
(114, 2, 34, 170, '2026-09-14 20:13:56'),
(115, 2, 35, 175, '2026-09-14 20:13:56'),
(116, 2, 36, 180, '2026-09-14 20:13:56'),
(117, 2, 37, 184, '2026-09-14 20:13:56'),
(118, 2, 38, 190, '2026-09-14 20:13:56'),
(119, 2, 39, 195, '2026-09-14 20:13:56'),
(120, 2, 40, 198, '2026-09-14 20:13:56'),
(121, 2, 1, 2, '2026-09-14 20:22:24'),
(122, 2, 2, 9, '2026-09-14 20:22:24'),
(123, 2, 3, 13, '2026-09-14 20:22:24'),
(124, 2, 4, 19, '2026-09-14 20:22:24'),
(125, 2, 5, 23, '2026-09-14 20:22:24'),
(126, 2, 6, 29, '2026-09-14 20:22:24'),
(127, 2, 7, 34, '2026-09-14 20:22:24'),
(128, 2, 8, 38, '2026-09-14 20:22:24'),
(129, 2, 9, 44, '2026-09-14 20:22:24'),
(130, 2, 10, 50, '2026-09-14 20:22:24'),
(131, 2, 11, 53, '2026-09-14 20:22:24'),
(132, 2, 12, 56, '2026-09-14 20:22:24'),
(133, 2, 13, 62, '2026-09-14 20:22:24'),
(134, 2, 14, 69, '2026-09-14 20:22:24'),
(135, 2, 15, 73, '2026-09-14 20:22:24'),
(136, 2, 16, 77, '2026-09-14 20:22:24'),
(137, 2, 17, 81, '2026-09-14 20:22:24'),
(138, 2, 18, 90, '2026-09-14 20:22:24'),
(139, 2, 19, 91, '2026-09-14 20:22:24'),
(140, 2, 20, 99, '2026-09-14 20:22:24'),
(141, 2, 21, 103, '2026-09-14 20:22:24'),
(142, 2, 22, 109, '2026-09-14 20:22:24'),
(143, 2, 23, 115, '2026-09-14 20:22:24'),
(144, 2, 24, 117, '2026-09-14 20:22:24'),
(145, 2, 25, 121, '2026-09-14 20:22:24'),
(146, 2, 26, 127, '2026-09-14 20:22:24'),
(147, 2, 27, 133, '2026-09-14 20:22:24'),
(148, 2, 28, 137, '2026-09-14 20:22:24'),
(149, 2, 29, 143, '2026-09-14 20:22:24'),
(150, 2, 30, 147, '2026-09-14 20:22:24'),
(151, 2, 31, 151, '2026-09-14 20:22:24'),
(152, 2, 32, 157, '2026-09-14 20:22:24'),
(153, 2, 33, 161, '2026-09-14 20:22:24'),
(154, 2, 34, 167, '2026-09-14 20:22:24'),
(155, 2, 35, 173, '2026-09-14 20:22:24'),
(156, 2, 36, 179, '2026-09-14 20:22:24'),
(157, 2, 37, 185, '2026-09-14 20:22:24'),
(158, 2, 38, 187, '2026-09-14 20:22:24'),
(159, 2, 39, 192, '2026-09-14 20:22:24'),
(160, 2, 40, 196, '2026-09-14 20:22:24'),
(161, 4, 1, 1, '2026-09-14 22:07:21'),
(162, 4, 2, 6, '2026-09-14 22:07:21'),
(163, 4, 3, 11, '2026-09-14 22:07:21'),
(164, 4, 4, 18, '2026-09-14 22:07:21'),
(165, 4, 5, 23, '2026-09-14 22:07:21'),
(166, 4, 6, 28, '2026-09-14 22:07:21'),
(167, 4, 7, 35, '2026-09-14 22:07:21'),
(168, 4, 8, 40, '2026-09-14 22:07:21'),
(169, 4, 9, 45, '2026-09-14 22:07:21'),
(170, 4, 10, 46, '2026-09-14 22:07:21'),
(171, 4, 11, 51, '2026-09-14 22:07:21'),
(172, 4, 12, 56, '2026-09-14 22:07:21'),
(173, 4, 13, 62, '2026-09-14 22:07:21'),
(174, 4, 14, 67, '2026-09-14 22:07:21'),
(175, 4, 15, 72, '2026-09-14 22:07:21'),
(176, 4, 16, 79, '2026-09-14 22:07:21'),
(177, 4, 17, 84, '2026-09-14 22:07:21'),
(178, 4, 18, 89, '2026-09-14 22:07:21'),
(179, 4, 19, 93, '2026-09-14 22:07:21'),
(180, 4, 20, 98, '2026-09-14 22:07:21'),
(181, 4, 21, 103, '2026-09-14 22:07:21'),
(182, 4, 22, 106, '2026-09-14 22:07:21'),
(183, 4, 23, 111, '2026-09-14 22:07:21'),
(184, 4, 24, 116, '2026-09-14 22:07:21'),
(185, 4, 25, 121, '2026-09-14 22:07:21'),
(186, 4, 26, 126, '2026-09-14 22:07:21'),
(187, 4, 27, 131, '2026-09-14 22:07:21'),
(188, 4, 28, 136, '2026-09-14 22:07:21'),
(189, 4, 29, 141, '2026-09-14 22:07:21'),
(190, 4, 30, 146, '2026-09-14 22:07:21'),
(191, 4, 31, 151, '2026-09-14 22:07:21'),
(192, 4, 32, 156, '2026-09-14 22:07:21'),
(193, 4, 33, 161, '2026-09-14 22:07:21'),
(194, 4, 34, 166, '2026-09-14 22:07:21'),
(195, 4, 35, 171, '2026-09-14 22:07:21'),
(196, 4, 36, 176, '2026-09-14 22:07:21'),
(197, 4, 37, 181, '2026-09-14 22:07:21'),
(198, 4, 38, 186, '2026-09-14 22:07:21'),
(199, 4, 39, 191, '2026-09-14 22:07:21'),
(200, 4, 40, 196, '2026-09-14 22:07:21'),
(201, 3, 1, 2, '2026-09-27 07:34:43'),
(202, 3, 2, 8, '2026-09-27 07:34:43'),
(203, 3, 3, 14, '2026-09-27 07:34:44'),
(204, 3, 4, 19, '2026-09-27 07:34:44'),
(205, 3, 5, 22, '2026-09-27 07:34:44'),
(206, 3, 6, 27, '2026-09-27 07:34:44'),
(207, 3, 7, 31, '2026-09-27 07:34:44'),
(208, 3, 8, 38, '2026-09-27 07:34:44'),
(209, 3, 9, 42, '2026-09-27 07:34:44'),
(210, 3, 10, 46, '2026-09-27 07:34:44'),
(211, 3, 11, 52, '2026-09-27 07:34:44'),
(212, 3, 12, 57, '2026-09-27 07:34:45'),
(213, 3, 13, 62, '2026-09-27 07:34:45'),
(214, 3, 14, 67, '2026-09-27 07:34:45'),
(215, 3, 15, 72, '2026-09-27 07:34:45'),
(216, 3, 16, 77, '2026-09-27 07:34:45'),
(217, 3, 17, 82, '2026-09-27 07:34:45'),
(218, 3, 18, 88, '2026-09-27 07:34:45'),
(219, 3, 19, 95, '2026-09-27 07:34:45'),
(220, 3, 20, 99, '2026-09-27 07:34:45'),
(221, 3, 21, 102, '2026-09-27 07:34:45'),
(222, 3, 22, 106, '2026-09-27 07:34:45'),
(223, 3, 23, 111, '2026-09-27 07:34:46'),
(224, 3, 24, 116, '2026-09-27 07:34:46'),
(225, 3, 25, 124, '2026-09-27 07:34:46'),
(226, 3, 26, 128, '2026-09-27 07:34:46'),
(227, 3, 27, 133, '2026-09-27 07:34:46'),
(228, 3, 28, 138, '2026-09-27 07:34:47'),
(229, 3, 29, 142, '2026-09-27 07:34:47'),
(230, 3, 30, 148, '2026-09-27 07:34:47'),
(231, 3, 31, 155, '2026-09-27 07:34:47'),
(232, 3, 32, 160, '2026-09-27 07:34:47'),
(233, 3, 33, 165, '2026-09-27 07:34:47'),
(234, 3, 34, 170, '2026-09-27 07:34:47'),
(235, 3, 35, 175, '2026-09-27 07:34:47'),
(236, 3, 36, 178, '2026-09-27 07:34:47'),
(237, 3, 37, 183, '2026-09-27 07:34:47'),
(238, 3, 38, 188, '2026-09-27 07:34:47'),
(239, 3, 39, 194, '2026-09-27 07:34:47'),
(240, 3, 40, 197, '2026-09-27 07:34:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados`
--

CREATE TABLE `resultados` (
  `id_resultado` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL DEFAULT 0,
  `fecha_resultado` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `resultados`
--

INSERT INTO `resultados` (`id_resultado`, `id_usuario`, `id_carrera`, `puntaje`, `fecha_resultado`) VALUES
(1, 1, 13, 17, '2026-09-14 19:44:54'),
(2, 1, 15, 17, '2026-09-14 19:44:54'),
(3, 1, 33, 17, '2026-09-14 19:44:54'),
(4, 1, 34, 17, '2026-09-14 19:44:54'),
(5, 1, 14, 17, '2026-09-14 19:44:54'),
(6, 2, 39, 20, '2026-09-14 20:06:12'),
(7, 2, 22, 20, '2026-09-14 20:06:12'),
(8, 2, 23, 20, '2026-09-14 20:06:12'),
(9, 2, 40, 20, '2026-09-14 20:06:12'),
(10, 2, 19, 25, '2026-09-14 20:13:56'),
(11, 2, 20, 25, '2026-09-14 20:13:56'),
(12, 2, 21, 25, '2026-09-14 20:13:56'),
(13, 2, 37, 25, '2026-09-14 20:13:56'),
(14, 2, 38, 25, '2026-09-14 20:13:56'),
(15, 2, 28, 20, '2026-09-14 20:22:24'),
(16, 2, 5, 20, '2026-09-14 20:22:24'),
(17, 2, 6, 20, '2026-09-14 20:22:24'),
(18, 2, 4, 20, '2026-09-14 20:22:24'),
(19, 2, 27, 20, '2026-09-14 20:22:24'),
(20, 4, 28, 19, '2026-09-14 22:07:21'),
(21, 4, 5, 19, '2026-09-14 22:07:21'),
(22, 4, 6, 19, '2026-09-14 22:07:21'),
(23, 4, 4, 19, '2026-09-14 22:07:21'),
(24, 4, 27, 19, '2026-09-14 22:07:21'),
(25, 3, 19, 25, '2026-09-27 07:34:47'),
(26, 3, 20, 25, '2026-09-27 07:34:48'),
(27, 3, 21, 25, '2026-09-27 07:34:48'),
(28, 3, 37, 25, '2026-09-27 07:34:48'),
(29, 3, 38, 25, '2026-09-27 07:34:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre`) VALUES
(1, 'admin'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidades`
--

CREATE TABLE `universidades` (
  `id_universidad` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `universidades`
--

INSERT INTO `universidades` (`id_universidad`, `nombre`, `ciudad`, `descripcion`) VALUES
(1, 'Universidad Nacional de Colombia', 'Bogotá', 'Universidad pública con programas en diferentes áreas del conocimiento.'),
(2, 'Universidad de Antioquia', 'Medellín', 'Universidad pública con programas académicos en diversas áreas.'),
(3, 'Universidad EAFIT', 'Medellín', 'Universidad con programas relacionados con tecnología, negocios y otras áreas.'),
(4, 'Universidad Pontificia Bolivariana', 'Medellín', 'Universidad con programas académicos en diferentes áreas profesionales.'),
(9, 'Universidad del Norte', 'Barranquilla', 'Universidad con una amplia oferta de programas profesionales.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidad_carreras`
--

CREATE TABLE `universidad_carreras` (
  `id_universidad` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `universidad_carreras`
--

INSERT INTO `universidad_carreras` (`id_universidad`, `id_carrera`) VALUES
(1, 1),
(1, 2),
(1, 24),
(2, 1),
(2, 2),
(2, 24),
(3, 1),
(3, 2),
(3, 24),
(4, 1),
(4, 2),
(9, 1),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 12),
(9, 13),
(9, 16),
(9, 17),
(9, 19),
(9, 20),
(9, 21),
(9, 23),
(9, 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `correo`, `password`, `id_rol`, `fecha_registro`) VALUES
(1, 'FLIVS', '', 'flivs134@gmail.com', '$2b$10$pgDdizF.AtwEgncEr83QnOoClPbqlFkWgIomdVAahZ4edAARENlAK', 1, '2026-09-08 20:26:28'),
(2, 'Isabella', '', 'isauran19@gmail.com', '$2b$10$crJxfLF0qksGFDq2Lsz/5OxStnsaDDslh6A/IbaD9vDL9jB2XGj.G', 2, '2026-09-14 19:56:12'),
(3, 'Valeria', '', 'vameru410@gmail.com', '$2b$10$kH846xWhToPFOtsitvPYNOGliU9f3GFphvQIs5dKjMT8O0yCYv3wa', 2, '2026-09-14 21:51:21'),
(4, 'Crisitan', '', 'cristian14@gmail.com', '$2b$10$3JtV2psp7rDqwYcyC0xPm.XHybIujc903.5s7vAtE1F5krsS8N6ma', 2, '2026-09-14 22:05:24'),
(5, 'Juan Mejía', '', 'juanc.mejia76@gmail.com', '$2b$10$QOcI6wjfCVDoA8NKlwu7C.z1tLDtXV7fW6MtGbuRp23mi8BFm3hu2', 2, '2026-09-27 20:29:35');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id_carrera`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `fk_carrera_categoria` (`id_categoria`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `conversaciones_flivs`
--
ALTER TABLE `conversaciones_flivs`
  ADD PRIMARY KEY (`id_conversacion`);

--
-- Indices de la tabla `opciones`
--
ALTER TABLE `opciones`
  ADD PRIMARY KEY (`id_opcion`),
  ADD KEY `fk_opcion_pregunta` (`id_pregunta`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `fk_pregunta_categoria` (`id_categoria`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `fk_respuesta_usuario` (`id_usuario`),
  ADD KEY `fk_respuesta_pregunta` (`id_pregunta`),
  ADD KEY `fk_respuesta_opcion` (`id_opcion`);

--
-- Indices de la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`id_resultado`),
  ADD KEY `fk_resultado_usuario` (`id_usuario`),
  ADD KEY `fk_resultado_carrera` (`id_carrera`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `universidades`
--
ALTER TABLE `universidades`
  ADD PRIMARY KEY (`id_universidad`);

--
-- Indices de la tabla `universidad_carreras`
--
ALTER TABLE `universidad_carreras`
  ADD PRIMARY KEY (`id_universidad`,`id_carrera`),
  ADD KEY `id_carrera` (`id_carrera`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `fk_usuario_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id_carrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `conversaciones_flivs`
--
ALTER TABLE `conversaciones_flivs`
  MODIFY `id_conversacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `opciones`
--
ALTER TABLE `opciones`
  MODIFY `id_opcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=256;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT de la tabla `resultados`
--
ALTER TABLE `resultados`
  MODIFY `id_resultado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `universidades`
--
ALTER TABLE `universidades`
  MODIFY `id_universidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD CONSTRAINT `fk_carrera_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `opciones`
--
ALTER TABLE `opciones`
  ADD CONSTRAINT `fk_opcion_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `fk_pregunta_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `fk_respuesta_opcion` FOREIGN KEY (`id_opcion`) REFERENCES `opciones` (`id_opcion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_respuesta_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_respuesta_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `fk_resultado_carrera` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_resultado_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `universidad_carreras`
--
ALTER TABLE `universidad_carreras`
  ADD CONSTRAINT `universidad_carreras_ibfk_1` FOREIGN KEY (`id_universidad`) REFERENCES `universidades` (`id_universidad`) ON DELETE CASCADE,
  ADD CONSTRAINT `universidad_carreras_ibfk_2` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id_carrera`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
