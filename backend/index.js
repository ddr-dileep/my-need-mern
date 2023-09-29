require("dotenv").config();
const ApiResponse = require("./src/api/api-response.js");
const app = require("./src/app.js");
const CONSTANTS = require("./src/utils/constants.js");
const databaseConfig = require("./src/utils/database-configuration.js");

databaseConfig(); // database configuration

// // Middleware function to log detailed information for all endpoints
// app.use((req, res, next) => {
//   // Log host, method, and route
//   console.log(`Host: ${req.headers.host}`);
//   console.log(`Method: ${req.method}`);
//   console.log(`Route: ${req.url}`);

//   // Capture request body parameters for POST and PUT requests
//   if (req.method === 'POST' || req.method === 'PUT' || req.method === "PATCH") {
//     console.log('Request Body:', req.body);
//   }

//   // Capture request query parameters
//   console.log('Request Query:', req.query);

//   // Capture request headers
//   console.log('Request Headers:', req.headers);

//   // Continue to the next middleware or route handler
//   next();
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   return ApiResponse.serverError(res, err.stack);
// });

// app is running on port
app.listen(CONSTANTS.APP_PORT, () => {
  console.log(`Listening on port ${CONSTANTS.APP_PORT}`);
});
