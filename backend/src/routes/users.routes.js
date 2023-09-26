const { Router } = require("express");
const { methods: userControllers } = require('../controllers/users.controllers')
const { ensureAuth } = require('../middlewares/auth');

const router = Router();

/**
 * @swagger
 * tags: 
 *  name: Users
 *  description: API endpoint to manage Users
 */

//Get All Users
/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get list users
 *      tags: [User]
 *      responses:
 *          "200":
 *              description: User info
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/sql/User'
 *          "400":
 *              $ref: '#/components/responses/400'
 *          "500":
 *              $ref: '#/components/responses/500'
 *                  
 */
router.get("/users", ensureAuth, userControllers.getAllUsers);

/**
 * @swagger
 * /users/create-user:
 *  post:
 *     summary: Create a user
 *     tags: [User]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/sql/User'
 *     responses:
 *       "400":
 *          $ref: '#/components/responses/400'
 *       "401":
 *          $ref: '#/components/responses/401'
 *       "200":
 *          description: Created user
 *          contents:
 *             application/json
 */
router.post("/users/create-user", userControllers.createUser);

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Inicio de sesión para obtener un token
 */

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login
 *    tags: [Login]
 *    requestBody:
 *      required: true
 *    responses:
 *      "400":
 *        $ref: '#/components/responses/400'
 *      "401":
 *        $ref: '#/components/responses/401'
 *      "201":
 *          description: login successful
 *          contents:
 *             application/json
 *          
 */
router.post("/login", userControllers.validateUser)

module.exports = router;