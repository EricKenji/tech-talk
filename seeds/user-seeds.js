const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'lJames',
    email: 'lebron@gmail.com',
    password: 'password123'
  },
  {
    username: 'mjordan',
    email: 'Jordan@gmail.com',
    password: 'password123'
  },
  {
    username: 'aiverson',
    email: 'iverson@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
