const { Router } = require("express");
const { methods: productsControllers } = require('../controllers/products.controller')

const router = Router();

router.get("/products", productsControllers.getAllProducts);
router.post("/products/create", productsControllers.createProduct);
router.put("/products/update/:id", productsControllers.updateProductById);
router.delete("/products", productsControllers.deleteProduct);

module.exports = router;