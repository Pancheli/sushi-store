const express = require('express');
const { methods: authControllers, } = require('../controllers/auth.controllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login to get a token
 */

/**
 * @swagger
 * /api/sushi-store/auth/login:
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
router.post("/login", authControllers.validateUser);

module.exports = router;