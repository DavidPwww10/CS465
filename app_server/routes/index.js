var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/travlr');

// Home
router.get('/', ctrlTravlr.home);

// Public site pages (MVC routes)
router.get('/travel', ctrlTravlr.travel);
router.get('/rooms', ctrlTravlr.rooms);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/about', ctrlTravlr.about);
router.get('/contact', ctrlTravlr.contact);

module.exports = router;
