import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/userModel.js';
import CalendarData from '../models/calendarModel.js';
import AnimalsData from '../models/animalsModel.js';
import ArtifactsData from '../models/artifactsModel.js';
import CropsData from '../models/cropsModel.js';
import FishData from '../models/fishModel.js';
import ForageData from '../models/forageModel.js';
import MineralsData from '../models/mineralModel.js';
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
    const modelName = req.params.type;
    let model;

    try {
        model = mongoose.model(modelName);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: 'Resource not found' });
    }

    const data = await model.find().sort({ Name: 1 });
    res.status(200).json(data);
});

router.get('/resources/:type/:id', async (req, res) => {
    const modelName = req.params.type;
    const id = req.params.id;
    let model;

    try {
        model = mongoose.model(modelName);
        const oneResource = await model.findOne({ _id: id });
        res.status(200).json(oneResource);
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: 'Resource not found' });
    }
});

export default router;
