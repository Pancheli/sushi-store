const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Sushi Store",
            version: "1.0.0",
            description: "Sistema de venta de sushi para un restaurant"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: 'Development server'
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['name', 'address', 'phone', 'email', 'password'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nombre completo del Usuario'
                        },
                        address: {
                            type: 'string',
                            description: 'Dirección del usuario'
                        },
                        phone: {
                            type: 'Numeric',
                            description: 'Número telefónico del usuario'
                        },
                        email: {
                            type: 'string',
                            description: 'Correo del Usuario'
                        },
                        password: {
                            type: 'string',
                            description: 'Contraseña del usuario'
                        },
                    },
                    example: {
                        name: 'usuario de prueba',
                        address: 'dirección de prueba',
                        phone: '920756099',
                        email: 'test@correo.com',
                        password: "1234"
                    }
                },
                Login: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: {
                            type: 'string',
                            description: 'Correo del Usuario'
                        },
                        password: {
                            type: 'string',
                            description: 'Contraseña del usuario'
                        },
                    },
                    example: {
                        email: 'test@correo.com',
                        password: "12345"
                    }
                },
                Products: {
                    type: 'object',
                    required: ['name', 'price', 'ingredients', 'image'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nombre del producto'
                        },
                        price: {
                            type: 'numeric',
                            description: 'Precio del producto'
                        },
                        ingredients: {
                            type: 'Array',
                            description: 'Ingredientes de cada producto'
                        },
                        image: {
                            type: 'string',
                            description: 'Imágen referencial del producto'
                        }
                    },
                    example: {
                        name: 'Roll de prueba',
                        price: '5990',
                        ingredients: ["primer ingrediente", "segundo ingrediente", "tercer ingrediente"],
                        image: 'https://cdn.pixabay.com/photo/2015/05/01/09/56/sushi-748139_1280.jpg'
                    }
                },
            },
            responses: {
                400: {
                    description: 'Missing API key - include it in the Authorization header',
                    contents: 'application/json'
                },
                401: {
                    description: 'Unauthorized - incorrect API key or incorrect format',
                    contents: 'application/json'
                },
                404: {
                    description: 'Not Found',
                    contents: 'application/json'
                },
                500: {
                    description: 'Internal Server Error',
                    contents: 'application/json'
                }
            },
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: "bearer"
                }
            }
        },
        security: [{
            bearerAuth: []  
        }]

    },
    apis: [ "./src/routes/user.routes.js", "./src/routes/products.routes.js"],
}

module.exports = options
