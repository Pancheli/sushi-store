const { runQuery } = require("../db/db");
const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    const { rows: users, rowCount } = await runQuery(sql);
    if (!rowCount) {
      throw {
        code: 404,
        message: "No users found in database",
      };
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error.mesagge);
    res.status(error.code || 500).send(error);
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.user;
    const sql = "SELECT * FROM users WHERE email = $1";
    const {
      rows: [user],
      rowCount,
    } = await runQuery(sql, [email]);
    if (!rowCount)
      throw {
        code: 404,
        message: "No user found with these credentials",
      };
    res.status(200).json(user);
  } catch (error) {
    console.error(error.mesagge);
    res.status(error.code || 500).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    let { name, address, phone, email, password } = req.body;
    const sql =
      "INSERT INTO users (name, address, phone, email, password) VALUES ($1, $2, $3, $4, $5)";
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(password, salt);
    password = passwordEncrypted;
    await runQuery(sql, [name, address, phone, email, passwordEncrypted]);
    res.status(200).json("Created User");
  } catch (error) {
    res.status(500).json(error.mesagge || error);
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.query;
  try {
    const findId = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    const result = await runQuery(findId, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found'})
    }
    const idToDelete = "DELETE FROM users WHERE id = $1";
    await runQuery(idToDelete, values);
    res.status(200).json({ message: "Deleted User" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "An error ocurred while deleting the user" });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params
  const { name, address, phone, email, password } = req.body

  try {
    const findId = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    const result = await runQuery(findId, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    const updateUser = 'UPDATE users SET name = $1, address = $2, phone = $3, email = $4 WHERE id = $5'
    const updateValues = [name, address, phone, email, id];
    await runQuery(updateUser, updateValues);
    res.status(200).json({ mesagge: 'User updated successfully'})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error updating user' });
  }
}

const validateUser = async (req, res) => {
  try {
    const sql = "SELECT * FROM users WHERE email = $1";
    const { email, password } = req.body;
    const {
      rows: [user],
      rowCount,
    } = await runQuery(sql, [email]);

    const { password: passwordEncrypted } = user;
    const passwordIsTrue = await bcrypt.compare(password, passwordEncrypted);

    if (!passwordIsTrue || !rowCount) {
      res.status(200).json({
        message: "Datos inválidos",
        success: false,
      });
    } else {
      const { name, phone, email, adress } = user;
      const token = jwt.sign({ email }, "az_AZ");
      res.status(200).json({
        message: { name, phone, email, adress, token },
        success: true,
      });
    }
  } catch (err) {
    console.log(err.mesagge);
    res.status(err.code || 500).json(err);
  }
};


exports.methods = {
  createUser,
  validateUser,
  getUserByEmail,
  getAllUsers,
  deleteUserById,
  updateUserById
};
