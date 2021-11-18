const mongoose = require("mongoose");

const database = mongoose
  .connect("mongodb://localhost:27017/hostelguru", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
