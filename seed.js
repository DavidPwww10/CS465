// seed.js
require('./app_api/models/db');

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const trips = require('./app_server/data/trips.json');

async function seed() {
    try {
        // Clear existing trips so you can re-run safely
        await Trip.deleteMany({});
        console.log('Cleared Trips collection');

        // Insert trips from trips.json
        await Trip.insertMany(trips);
        console.log('Inserted trips from trips.json');

        await mongoose.connection.close();
        console.log('Done. Connection closed.');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
}

seed();
