// app_server/controllers/trips.js
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips  -> return JSON list of trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find().lean().exec();
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({
            message: 'Error retrieving trips',
            error: err
        });
    }
};

module.exports = {
    tripsList
};
