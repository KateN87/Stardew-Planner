import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mineralsSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    SellPrice: {
        type: Number,
        required: true,
    },
    Source: {
        type: Array,
        required: true,
    },
    MineLvl: {
        type: String,
        required: true,
    },
    Panning: {
        type: Boolean,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

const MineralsData = mongoose.model('mineralsData', mineralsSchema, 'Minerals');

export default MineralsData;
