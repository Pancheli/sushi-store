-- Creando la tabla para los items del carrito de compra

CREATE TABLE shoppingCart (
    id SERIAL PRIMARY KEY,
    quantity NUMBER(20),
    user_id INT REFERENCES users(users_id),
    product_id INT REFERENCES products(product_id)
)