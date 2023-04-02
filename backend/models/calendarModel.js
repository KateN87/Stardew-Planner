import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    Date: {
        type: String,
        required: true,
    },
    Event: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Season: {
        type: String,
        required: true,
    },
});

const CalendarData = mongoose.model(
    'calendarData',
    calendarSchema,
    'calenderData'
);

export default CalendarData;
