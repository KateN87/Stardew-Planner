import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

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
        type: [resourceSchema],
        required: true,
    },
});

const ResourceOrder = mongoose.model('ResourceOrder', resourceOrderSchema);

export default ResourceOrder;
