-- Creando la tabla de los productos en el inventario

CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMBER(10) NOT NULL,
    quantity NUMERIC(20),
    ingredients INT[],
    image VARCHAR(255),
    category VARCHAR(25)
);