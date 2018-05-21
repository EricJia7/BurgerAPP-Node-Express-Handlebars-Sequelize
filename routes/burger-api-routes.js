const db = require("../models");

module.exports = function (app) {
    app.get("/api/burgers", (req, res) => {
        db.Burger.findAll().then(result => {
            res.json(result);
            return result;
        }).catch(err => {
            console.log('Unable to connect to the database:', err);
        });
    });

    app.post("/api/burgers", function (req, res) {
        const name = req.body.burger_name;
        db.Burger.create({
            burger_name: name
        }).then(() => {
            Burger.findAll().then(result => {
                res.json(result);
                return result;
            }).catch(err => {
                console.log('Unable to connect to the database:', err);
            })
        })
    });

    app.put("/api/burgers/:id", function (req, res) {
        const id = req.params.id;
        db.Burger.findById(id).then(result => {
            result.devoured = 1;
            result.save();
        }).then(() => {
            Burger.findAll().then(result => {
                res.json(result);
                return result;
            }).catch(err => {
                console.log('Unable to connect to the database:', err);
            })
        });
    });
};
