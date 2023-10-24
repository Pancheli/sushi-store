const { Router } = require("express");
const {
  methods: productsControllers,
} = require("../controllers/products.controller");

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: API endpoint to manage the products in the database
 */

/**
 * @swagger
 * /products:
 *  get:
 *      description: Return all the products in the database
 *      summary: Get list of the products
 *      tags: [Products]
 *      responses:
 *          "200":
 *              description: A list of the products.
 *              content:
 *                  application/json:
 *                      schema:
 *                           $ref: '#/components/schemas/Products'
 *          "401":
 *              $ref: '#/components/responses/401'
 *          "500":
 *              $ref: '#/components/responses/500'
 *
 */
router.get("/products", productsControllers.getAllProducts);

/**
 * @swagger
 * /products/create:
 *  post:
 *      description: Creating a new product in the database
 *      summary: Create a product
 *      tags: [Products]
 *      parameters:
 *          name: id
 *          in: path
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          "200":
 *              description: Created product
 *              contents:
 *                  application/json
 *          "400":
 *              $ref: '#/components/responses/400'
 */
router.post("/products/create", productsControllers.createProduct);


/**
 * @swagger
 * /products/update/:id:
 *  put:
 *      description: Update a product by his ID
 *      summary: Update a product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          "200":
 *              description: Updated successfully
 *              contents:
 *                  application/json
 *          "400":
 *              $ref: '#/components/responses/400'
 *          "500":
 *              $ref: '#/components/responses/500'
 */
router.put("/products/update/:id", productsControllers.updateProductById);


/**
 * @swagger
 * /products:
 *  delete:
 *      description: Delete a product from the database
 *      summary: Delete a product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'
 *      responses:
 *          "200":
 *              description: Deleted product
 *              contents:
 *                  application/json
 *          "404":
 *              description: Cannot delete product
 *              $ref: '#/components/responses/404'
 */
router.delete("/products", productsControllers.deleteProduct);

module.exports = router;
