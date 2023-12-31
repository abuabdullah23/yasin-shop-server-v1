const generateToken = require("../../../../utils/generateToken");

const createAuthJWT = async (req, res) => {
    const user = req.body;
    const token =  generateToken(user);
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).send({ success: true })
}

module.exports = createAuthJWT;