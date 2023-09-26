-- Creando la tabla de usuarios con las columnas correspondientes
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    phone NUMBER(10),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);