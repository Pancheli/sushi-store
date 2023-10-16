-- Creando la tabla de los productos en el inventario

CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMBER(10) NOT NULL,
    description VARCHAR(255),
    quantity NUMERIC(20),
    ingredients INT[],
    image VARCHAR(255),
);