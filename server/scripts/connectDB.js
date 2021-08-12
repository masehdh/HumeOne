const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = async () => {
  try {
    const mongoURI = process.env.NODE_ENV === 'production'
      ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/humeone_db?authSource=admin`
      : `mongodb://localhost:27017/humeone_db`
      // : `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/humeone_db?authSource=admin`
    await mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      (err) => console.log(err || "Connected to DB")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
