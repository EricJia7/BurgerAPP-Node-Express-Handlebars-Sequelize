// const orm = require('../config/orm.js');

// const burger = {
//     selectAll: function(cb) {
//         orm.selectAll('burgers').then(result => {
//             cb(result)
//         }).catch(err => console.log(err));
//     },

//     insertOne: function(nameInput,cb) {
//         orm.insertOne('burgers', nameInput).then(result => {
//             cb(result)
//         }).catch(err => console.log(err));
//     },

//     updateOne: function(idInput,cb) {
//         orm.updateOne('burgers', idInput).then(result => {
//             cb(result)
//         }).catch(err => console.log(err));
//     },   
// }

// module.exports = burger;


module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        burger_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        date: {
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
    });

    return Burger;
}
