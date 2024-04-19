const jwt = require('jsonwebtoken');
const genRefreshToken = (id) => {
    return jwt.sign({id},process.env.JWT_SecretKey,{expiresIn : "3d"});
};
module.exports = genRefreshToken;