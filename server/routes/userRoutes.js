const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Await the result of User.find()
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: 'Failed to fetch users', details: err.message });
    }
});

module.exports = router;
