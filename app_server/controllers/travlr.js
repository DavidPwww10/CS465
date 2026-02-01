// app_server/controllers/travlr.js

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const home = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};

const travel = async (req, res) => {
    try {
        const trips = await Trip.find().lean().exec();

        res.render('travel', {
            title: 'Travel',
            trips
        });
    } catch (err) {
        console.error('Error loading trips from database:', err);
        res.status(500).send('Error loading trips from database');
    }
};

const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms' });
};

const meals = (req, res) => {
    res.render('meals', { title: 'Meals' });
};

const news = (req, res) => {
    res.render('news', { title: 'News' });
};

const about = (req, res) => {
    res.render('about', { title: 'About' });
};

const contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
};

module.exports = {
    home,
    travel,
    rooms,
    meals,
    news,
    about,
    contact
};
