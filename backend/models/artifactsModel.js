import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const artifactsSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Source: {
        type: Array,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
});

const ArtifactsData = mongoose.model(
    'artifactsData',
    artifactsSchema,
    'Artifacts'
);

export default ArtifactsData;
