const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({ _id: user._id, role: user.role }, 'accessSecretKey', { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ _id: user._id, role: user.role }, 'refreshSecretKey');
};

module.exports = { generateAccessToken, generateRefreshToken };
