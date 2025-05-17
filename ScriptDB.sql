-- Crear tabla Instructor
CREATE TABLE instructor (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Crear tabla PerfilInstructor (1 a 1 con Instructor)
CREATE TABLE perfil_instructor (
    id SERIAL PRIMARY KEY,
    biografia VARCHAR(255),
    redes_sociales VARCHAR(255),
    especializacion VARCHAR(100),
    instructor_id INTEGER UNIQUE NOT NULL REFERENCES instructor(id)
);

-- Crear tabla Curso (1 Instructor puede tener muchos Cursos)
CREATE TABLE curso (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    duracion INTEGER NOT NULL, -- duración en horas
    instructor_id INTEGER NOT NULL REFERENCES instructor(id)
);

-- Crear tabla Leccion (1 Curso puede tener muchas Lecciones)
CREATE TABLE leccion (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    contenido VARCHAR(100) NOT NULL,
    numero_orden INTEGER NOT NULL,
    curso_id INTEGER NOT NULL REFERENCES curso(id)
);



