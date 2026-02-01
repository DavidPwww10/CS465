// app_server/routes/api.js
var express = require('express');
var router = express.Router();

const ctrlTrips = require('../controllers/trips');

// /api/trips
router.get('/trips', ctrlTrips.tripsList);

module.exports = router;
