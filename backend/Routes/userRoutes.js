import express from 'express';

import ResourceOrder from '../models/resourceOrderModel.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();
router.use(requireAuth);

router.get('/resourceorders', async (req, res) => {
    try {
        const user_id = req.user._id;

        const { listOfResources } = await ResourceOrder.findOne({ user_id });
        res.status(200).json(listOfResources);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.patch('/resourceorders', async (req, res) => {
    const user_id = req.user._id;
    const { listOfResources } = req.body;

    try {
        // Find the ResourceOrder document for the user
        const resourceOrder = await ResourceOrder.findOne({ user_id });
        const updatedResources = [
            ...resourceOrder.listOfResources,
            ...listOfResources,
        ];

        const updatedOrder = await ResourceOrder.findOneAndUpdate(
            { user_id },
            { listOfResources: updatedResources },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedOrder);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding resource to order.' });
    }
});

export default router;
