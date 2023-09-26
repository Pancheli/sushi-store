const { runQuery } = require('../db')
const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const getAllUsers = async (req, res) => {
    try {
        const { email } = req.user;
        const sql = "SELECT * FROM users WHERE email = $1"
        const { rows: [user], rowCount } = await runQuery(sql, [email]);
        if (!rowCount) throw {
            code: 404,
            message:'No user found with these credentials'
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error.mesagge);
        res.status(error.code || 500).send(error)
    }
}

const createUser = async (req, res) => {
    try {
        let { name, address, phone, email, password } = req.body;
        const sql = 'INSERT INTO users (name, address, phone, email, password) VALUES ($1, $2, $3, $4, $5)';
        const salt = await bcrypt.genSalt(10);
        const passwordEncrypted = await bcrypt.hash(password, salt);
        password = passwordEncrypted;
        await runQuery(sql, [name, address, phone, email, passwordEncrypted]);
        res.status(200).json('Created User')
    } catch (error) {
        res.status(500).json(error.mesagge || error );
    }
}

const validateUser = async (req, res) => {
    try {
        const sql = 'SELECT * FROM users WHERE email = $1';
        const { email, password } = req.body;
        const { rows: [user], rowCount } = await runQuery(sql, [email]);
        const { password: passwordEncrypted } = user;
        const passwordIsTrue = await bcrypt.compare(password, passwordEncrypted);
        if (!passwordIsTrue || !rowCount) throw 'User or password incorrect'
        const token = jwt.sign({ email }, "az_AZ")
        res.status(200).json(token);
    } catch (err) {
        console.log(err.mesagge)
        res.status(err.code || 500).json(err);
    }
};

// const deleteUserById = async(req, res) => {
//     const { id } = req.query;
//     try {
//         const findId = "SELECT * FROM users WHERE id = $1"
//         const values = [id]
//         const result = await pool.query(findId, values)
//         if (result.rows.length === 0) {
//             throw new Error ('Cannot find the ID')
//         }
//         const idToDelete = 'DELETE FROM users WHERE id = $1'
//         await pool.query(idToDelete, values)
//         res.status(200).json({message: "Deleted User"});

//     } catch(err) {
//         console.error(err.message);
//         res.status(404).json({message: "Cannot delete user"});
//     }    
// }

exports.methods = {
  createUser,
  validateUser,
  getAllUsers
}
