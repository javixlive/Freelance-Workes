const mongoose = require("mongoose");
require('dotenv').config()

mongoose.set('strictQuery', true)

// const { URL } = process.env

// If the MongoDB service doesn't not start. Open a terminal and run mongod

const db = () => {
  const conn = mongoose.connect(process.env.URL)
  console.log("Connected to MongoDB");
};

module.exports = db;