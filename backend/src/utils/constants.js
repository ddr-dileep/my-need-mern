const APP_PORT = process.env.APP_PORT || 8081;

// Define the email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const CONSTANTS = { APP_PORT, emailRegex };

module.exports = CONSTANTS;
