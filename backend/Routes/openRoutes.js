import express from 'express';

import CalendarData from '../models/calendarModel.js';

const router = express.Router();

router.get('/calendar', async (req, res) => {
    const calendarData = await CalendarData.find();
    res.status(200).json(calendarData);
});

export default router;
