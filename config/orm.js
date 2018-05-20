const connection = require('../config/connection_mysql.js');
const Burger = require('../config/connection_sequelize.js');

const orm = {
    selectAll: function(selTable) {
        return new Promise((resolve,reject) => {
            connection.query(`SELECT * FROM ${selTable} ;`, (err,result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    },

    insertOne: function(selTable,bgName) {
        return new Promise((resolve,reject) => {
            connection.query(`INSERT INTO ${selTable} (burger_name)  VALUES("${bgName}") ;`, (err,result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    },

    updateOne: function(selTable,id) {
        return new Promise((resolve,reject) => {
            connection.query(`UPDATE ${selTable} SET devoured = 1 WHERE id= "${id}"; `, (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        });
    }
};

const orm_seq = {
    selectAll: function() {
        Burger.findAll().then(result => {
            return result;
        }).catch(err => {
            console.log('Unable to connect to the database:', err);
        })
    },

    insertOne: function(bgName) {
        Burger.create({
            burger_name: bgName,
        }).then(()=> {
            Burger.findAll().then(result => {
                return result;
            }).catch(err => {
                console.log('Unable to connect to the database:', err);
            })
        })
    },

    updateOne: function(id) {
        Burger.findById(id).then(result=> {
            result.devoured = 1;
            result.save();
        }).catch(err => {
            console.log('Unable to connect to the database:', err);
        });
    }
}

module.exports = orm;