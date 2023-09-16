import mongoose from 'mongoose';
const { Schema } = mongoose;

const DjemaSchema = new Schema({
    
    userId: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
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
        required: true,
    },

    cover: {
        type: String,
        default: "https://img.freepik.com/photos-premium/main-masculine-touchant-dans-concept-service_220873-7826.jpg?w=740"
       
    },

    images: {
        type: [String],
        
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