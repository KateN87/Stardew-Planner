import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fishSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
    Season: {
        type: String,
        required: true,
    },
    Weather: {
        type: String,
        required: true,
    },
    SizeInches: {
        type: Number,
        required: true,
    },
    DiffBehav: {
        type: String,
        required: true,
    },
    BaseXP: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

const FishData = mongoose.model('fishData', fishSchema, 'Fish');

export default FishData;
