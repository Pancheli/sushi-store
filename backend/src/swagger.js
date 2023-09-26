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
                // Project: {
                //     type: 'object',
                //     required: ['name', 'kind'],
                //     properties: {
                //         name: {
                //             type: 'string',
                //             description: 'Nombre del Proyecto'
                //         },
                //         kind: {
                //             type: 'string',
                //             description: 'Si es de soporte/projecto etc.'
                //         }
                //     },
                //     example: {
                //         name: 'Soporte',
                //         kind: 'Soporte de codigo ya creado.'
                //     }
                // },
            },
            responses: {
                400: {
                    description: 'Missing API key - include it in the Authorization header',
                    contents: 'application/json'
                },
                401: {
                    description: 'Unauthorized - incorrect API key or incorrect format',
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
    apis: [ "./src/routes/users.routes.js", "./src/routes/products.routes.js"],
}

module.exports = options
