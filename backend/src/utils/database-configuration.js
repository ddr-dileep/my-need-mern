const mongoose = require("mongoose");

const databaseConfig = async () => {
  try {
    const db = await mongoose.connect(process.env.MY_DB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (e) {
    console.error(e);
  }
};

module.exports = databaseConfig;
