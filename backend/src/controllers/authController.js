const { signToken } = require('../utils/signToken');

const login = async (req, res, next) => {
    try {
        const payload = {
            id: req.user.id
        };

        const token = await signToken(payload);

        res.status(200).json({
            msg: 'Inicio de sesión correcto',
            token,
        });
    }
    catch (error) {
        res.json({
            msg: error.message
        })
    }
}

export default {
    login
}