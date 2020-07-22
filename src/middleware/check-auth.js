const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1]; //where tokens are stored
		const decoded = jwt.verify(token, process.env.JWT_KEY); // decode the token using secret key
		req.userData = decoded;
		next();
	} catch (error) {
		return res.status(401).json(error);
	}
};
