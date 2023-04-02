import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import userRoutes from './Routes/userRoutes.js';
import openRoutes from './Routes/openRoutes.js';

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/user', userRoutes);
app.use('/api/', openRoutes);

try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () =>
        console.log('connected to db & listening on port', PORT)
    );
} catch (error) {
    console.log(error);
}
