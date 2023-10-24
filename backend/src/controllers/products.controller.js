const { runQuery } = require("../db/db");

const getAllProducts = async (req, res) => {
  try {
    const result = await runQuery("SELECT * FROM products;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(err.mesagge);
    res.json({ mesagge: "Cannon get all products" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, quantity, ingredients, image } = req.body;
    const sql =
      "INSERT INTO products(name, price, quantity, ingredients, image) VALUES($1, $2, $3, $4, $5) RETURNING *";
    const result = await runQuery(sql, [
      name,
      price,
      quantity,
      ingredients,
      image,
    ]);
    res.status(200).json({ message: `Created product`, result: result.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json( err.message );
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  try {
    const findId = "SELECT * FROM products WHERE id = $1";
    const values = [id];
    const result = await runQuery(findId, values);
    if (result.rows.length === 0) {
      throw new Error("Cannot find the ID");
    }
    const idToDelete = "DELETE FROM products WHERE id = $1";
    await runQuery(idToDelete, values);
    res.status(200).json({ message: "Deleted product" });
  } catch (err) {
    console.error(err.message);
    res.status(404).json({ message: "Cannot delete product" });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, ingredients, image } = req.body;

  try {
    const findId = "SELECT * FROM products WHERE id = $1";
    const values = [id];
    const result = await runQuery(findId, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found " });
    }

    const updateProduct =
      "UPDATE products SET name = $1, price = $2, quantity = $3, ingredients = $4, image = $5 WHERE id = $6";
    const updateValues = [name, price, quantity, ingredients, image, id];
    await runQuery(updateProduct, updateValues);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Error updating product" });
  }
};

exports.methods = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProductById,
};
