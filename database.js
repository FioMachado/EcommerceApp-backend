const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("mongodb connected!!!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
