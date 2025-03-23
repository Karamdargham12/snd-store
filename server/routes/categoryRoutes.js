const express = require('express');

const Category = require('../models/Category');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({});
        res.send(categories);
    } catch (err) {
        res.status(500).send("Bad Server");
    }
});

router.post('/', authMiddleware(['admin']), async (req, res) => {
    const { name } = req.body;
    const category = new Category({ name });

    try {
        await category.save();
        res.status(201).send("Category Added Successfuly");
    } catch (err) {
        res.status(400).send(err.message);
    }
});
router.put('/:id',authMiddleware(['admin']),async (req, res) => {
        const { id } = req.params;
        const updates = req.body;
        try {
            const category = await Category.findByIdAndUpdate(id, updates, { new: true });
            if (!category) {
                return res.status(404).send("Not Found");
            }
            res.send(category);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
);

// حذف مستخدم
router.delete('/:id', authMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findByIdAndDelete(id);
        if (!category) return res.status(404).send("Category Not Found");

        res.send("The Category is added succesfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;
