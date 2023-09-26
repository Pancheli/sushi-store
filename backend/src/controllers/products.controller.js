const pool = require("../db");


const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products;")
        res.status(200).json(result.rows);
    } catch ( error ) {
        console.error(err.mesagge);
        res.json({mesagge: "No se pudieron recuperar los productos"})
    }
}

const createProduct = async (req, res) => {
    try {
        const {name, price, description, image, quantity} = req.body;
        const sql = "INSERT INTO products(name, price, description, image, quantity) VALUES($1, $2, $3, $4, $5) RETURNING *";
        const result = await pool.query(sql, [name, price, description, image, quantity])
        res.status(200).json({mensaje: `Registro creado`, result:result.rows});
    }catch(err) {
        console.error(err.message);
        res.json({message: "Hemos tenido problemas con la petición"})
    }
}

const deleteProduct = async(req, res) => {
    const { id } = req.query;
    try {
        const findId = "SELECT * FROM products WHERE id = $1"
        const values = [id]
        const result = await pool.query(findId, values)
        if (result.rows.length === 0) {
            throw new Error ('Cannot find the ID')
        }
        const idToDelete = 'DELETE FROM products WHERE id = $1'
        await pool.query(idToDelete, values)
        res.status(200).json({message: "Producto eliminado"});

    } catch(err) {
        console.error(err.message);
        res.status(404).json({message: "Cannot delete product"});
    }    
}

module.exports = {
    getAllProducts ,
    createProduct,
    deleteProduct
}