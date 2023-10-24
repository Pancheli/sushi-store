const { Router } = require("express");
const {
  methods: userControllers,
} = require("../controllers/users.controllers");
const { ensureAuth } = require("../middlewares/auth");

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
 *      description: Return all the users in the database
 *      summary: Get list users
 *      tags: [Users]
 *      responses:
 *          "200":
 *              description: A list of users.
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: Array
 *                          items: {$ref: '#/components/schemas/User'}
 *          "400":
 *              $ref: '#/components/responses/400'
 *          "500":
 *              $ref: '#/components/responses/500'
 *
 */
router.get("/users", userControllers.getAllUsers);

/**
 * @swagger
 * /users/create:
 *  post:
 *     description: Creating a new user in the database
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
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
router.post("/users/create", userControllers.createUser);

/**
 * @swagger
 * /users:
 *  delete:
 *     summary: Delete a user by Id
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       "400":
 *          $ref: '#/components/responses/400'
 *       "401":
 *          $ref: '#/components/responses/401'
 *       "200":
 *          description: Deleted user
 *          contents:
 *             application/json
 */
router.delete('/users', userControllers.deleteUserById);

/**
 * @swagger
 * /users/update/:id:
 *  put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *        name: id
 *        in: path
 *        description: ID of the user to update
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       "400":
 *          $ref: '#/components/responses/400'
 *       "401":
 *          $ref: '#/components/responses/401'
 *       "200":
 *          description: User Updated
 *          contents:
 *             application/json
 */
router.put('/users/update/:id', userControllers.updateUserById);


/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login to get a token
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login
 *    tags: [Login]
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Login'
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
router.post("/auth/login", userControllers.validateUser);

module.exports = router;
