// app_server/models/trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Trip name is required'],
        trim: true
    },
    duration: {
        type: String,
        required: [true, 'Trip duration is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Trip price is required'],
        min: [0, 'Price cannot be negative']
    },
    rating: {
        type: Number,
        required: [true, 'Trip rating is required'],
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating cannot exceed 5']
    },
    image: {
        type: String,
        required: [true, 'Trip image path is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Trip description is required'],
        trim: true
    }
}, { timestamps: true });

mongoose.model('Trip', tripSchema);
