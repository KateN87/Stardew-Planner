import express from 'express';

import ResourceOrder from '../models/resourceOrderModel.js';
import requireAuth from '../middleware/requireAuth.js';
import GameItem from '../models/gameDataModel.js';

const router = express.Router();
router.use(requireAuth);

router.get('/', (req, res) => {
    res.sendStatus(200);
});

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
    const { _id: user_id } = req.user;
    const { itemId, quantity: qty } = req.body.newResource;
    try {
        // Find the ResourceOrder document for the user
        const resourceOrder = await ResourceOrder.findOne({ user_id });
        const updatedResources = [
            ...resourceOrder.listOfResources,
            {
                ...(await GameItem.findById(itemId)
                    .select('Name Image')
                    .lean()),
                quantity: qty,
            },
        ];
        const { listOfResources } = await ResourceOrder.findOneAndUpdate(
            { user_id },
            { listOfResources: updatedResources },
            { new: true } // Return the updated document
        );
        res.status(200).json(listOfResources);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding resource to order.' });
    }
});

router.delete('/resourceorders/:id', async (req, res) => {
    const { _id: user_id } = req.user;
    const { id: resourceId } = req.params;
    console.log('RESOURCEID', resourceId);

    try {
        const resourceOrder = await ResourceOrder.findOne({ user_id });
        if (!resourceOrder) {
            return res
                .status(404)
                .json({ message: 'Resource order not found' });
        }
        const newList = resourceOrder.listOfResources.filter(
            (r) => r._id.toString() !== resourceId
        );

        const { listOfResources } = await ResourceOrder.findOneAndUpdate(
            { user_id },
            { listOfResources: newList },
            { new: true } // Return the updated document
        );
        res.status(200).json(listOfResources);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting resource' });
    }
});

export default router;
