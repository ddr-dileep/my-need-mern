require("dotenv").config();
const app = require("./src/app.js");
const CONSTANTS = require("./src/utils/constants.js");
const databaseConfig = require("./src/utils/database-configuration.js");

databaseConfig(); // database configuration

// app is running on port
app.listen(CONSTANTS.APP_PORT, () => {
  console.log(`Listening on port ${CONSTANTS.APP_PORT}`);
});
