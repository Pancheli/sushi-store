const { Router } = require("express"),
    {getAllProducts, createProduct, deleteProduct} = require("../controllers/products.controller");

const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.delete("/products", deleteProduct);

module.exports = router;