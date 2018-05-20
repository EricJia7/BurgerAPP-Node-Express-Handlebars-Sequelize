require('dotenv').config();

const mysql_password = require('../keys.js')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('burgers_db','root', mysql_password, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    dialectOptions: {decimalNumbers: true},
    logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

function logOut() {
    sequelize.close();
};

const Burgers = sequelize.define('burgers', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey:true,
    },
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    date: Sequelize.DATE
}, {
    timestamps:false,
});

module.exports = Burgers;
