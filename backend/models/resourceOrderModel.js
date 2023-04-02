import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resourceOrderSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    user_Name: {
        type: String,
        required: true,
    },
    listOfResources: {
        type: Array,
        required: true,
    },
});

const resourceOrder = mongoose.model('ResourceOrder', resourceOrderSchema);

export default resourceOrder;
