import mongoose from 'mongoose';
const { Schema } = mongoose;

const DjemaSchema = new Schema({
    
    userId: {
        type: String,
        required,
    },

    title: {
        type: String,
        required,
    },

    desc: {
        type: String,
        required,
    },

    totalStars: {
        type: Number,
        default: 0,
    },

    starNumber: {
        type: Number,
        default: 0,
    },

    cat: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required,
    },

    cover: {
        type: String,
        required,
    },

    images: {
        type: [String],
        required: false,
    },

    shortTitle: {
        type: String,
        required: true,
    },

    shortDesc: {
        type: String,
        required: true,
    },

    deliveryTime: {
        type: Number,
        required: true,
    },

    revisionNumber: {
        type: Number,
        required: true,
    },

    features: {
        type: [String],
        required: false,
    },

    salesNumber: {
        type: Number,
        default: 0,
    },

},
    {
        timestamps: true
    });

export default mongoose.model("Djema", DjemaSchema)