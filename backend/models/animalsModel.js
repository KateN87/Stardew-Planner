import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const animalsSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: Array,
        required: true,
    },
    Source: {
        type: Array,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Produce: {
        type: Array,
        required: true,
    },
    ProduceRateDays: {
        type: Number,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

const AnimalsData = mongoose.model('animalsData', animalsSchema, 'Animals');

export default AnimalsData;
