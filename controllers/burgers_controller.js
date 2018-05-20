
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll(function(data) {
        let bgObj = {
            burgers: data
        };
        res.render('index',bgObj);
    })
});

router.post('/api/burgers', (req,res) => {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(data){
        res.json({id: data.id});
    })
});

router.put('/api/burgers/:id', (req,res) => {

    const id = req.params.id;
    burger.updateOne(id, function(data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
module.exports = router;
