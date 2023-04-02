import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
};

//login route
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await User.login(userName, password);

        const token = createToken(user._id);

        res.status(200).json({ userName, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Signup route
router.post('/signup', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await User.signup(userName, password);
        console.log(user._id);
        console.log(process.env.SECRET);
        const token = createToken(user._id);
        res.status(200).json({ userName, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
