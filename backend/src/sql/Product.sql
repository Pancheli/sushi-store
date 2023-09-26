-- Creando la tabla de los productos en el inventario

CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(255),
    quantity DECIMAL(20)
);