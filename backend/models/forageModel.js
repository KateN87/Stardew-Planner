import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const forageSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Seed: {
        type: String,
        required: true,
    },
    Source: {
        type: String,
        required: true,
    },
    SeedPrice: {
        type: Number,
        required: true,
    },
    GrowthDays: {
        type: Number,
        required: true,
    },
    RegrowthDays: {
        type: Number,
        required: true,
    },
    Season: {
        type: Array,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

const ForageData = mongoose.model('forageData', forageSchema, 'Forage');

export default ForageData;
