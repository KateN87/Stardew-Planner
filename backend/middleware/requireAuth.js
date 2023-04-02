import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization-token required' });
    }

    //'Bearer 12312312.495879345.239847928347' only wants whats is after the 'Bearer '
    const token = authorization.split(' ')[1];

    // gets the user from the database with the id from the token, then adds a user-property containing only the id from the database to the req, before going to 'next'

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        req.user = await User.findOne({ _id }).select('_id');

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

export default requireAuth;
