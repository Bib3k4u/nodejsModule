// db.js
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: true, // Disable logging to avoid printing raw SQL queries to the console
    define: {
      timestamps: false, // Disable Sequelize's default timestamps
    },
    dialectOptions: {
      multipleStatements: true, // Allow multiple statements in a single query (useful for creating the database)
    },
  });
  
  sequelize.query(`CREATE DATABASE IF NOT EXISTS ${config.database};`)
    .then(() => console.log('Database synced'))
    .catch((error) => console.error('Error creating database:', error));
  

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
});

const db = {
  sequelize,
  User,
};

module.exports = db;
