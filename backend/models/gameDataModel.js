import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameDataSchema = new Schema({
    Type: {
        type: Array,
        required: true,
    },
    Type: {
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
});

const GameItem = mongoose.model('GameItem', gameDataSchema, 'gameItems');

export default GameItem;
