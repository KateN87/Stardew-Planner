import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/userModel.js';
import CalendarData from '../models/calendarModel.js';
import GameItem from '../models/gameDataModel.js';
import ResourceOrder from '../models/resourceOrderModel.js';

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
    const listOfResources = [];

    try {
        const user = await User.signup(userName, password);
        const user_id = user._id;
        const user_Name = user.userName;
        await ResourceOrder.create({ user_id, user_Name, listOfResources });

        const token = createToken(user._id);
        res.status(200).json({ userName, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/calendar', async (req, res) => {
    const calendarData = await CalendarData.find();
    res.status(200).json(calendarData);
});

router.get('/resources/:type', async (req, res) => {
    let type = req.params.type;
    if (type.endsWith('s')) {
        type = type.slice(0, -1);
    }
    console.log('TYPE I SINGULAR', type);

    try {
        const data = await GameItem.find({ Type: type }).sort({ Name: 1 });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: 'Resource not found' });
    }
});

router.get('/resource/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const data = await GameItem.findOne({ _id: id });
        /* const oneResource = await model.findOne({ _id: id }); */
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: 'Resource not found' });
    }
});

export default router;
