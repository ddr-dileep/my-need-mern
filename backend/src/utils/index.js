const bcrypt = require("bcrypt");
const CONSTANTS = require("./constants");

const validateEmail = (email) => {
  return CONSTANTS.emailRegex.test(email);
};

function isStrongPassword(password) {
  // At least 8 characters in length
  if (password.length < 8) {
    return false;
  }

  // Contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Contains at least one digit
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Contains at least one special character (e.g., !, @, #, $, etc.)
  if (!/[!@#\$%\^&\*\(\)_\-\+=\[\]{};:'",<>\.\/?\\|]/.test(password)) {
    return false;
  }

  // Password meets all criteria
  return true;
}

const hashingPassword = (password) => bcrypt.hash(password, 12);

const comparingPassword = (plainPassword, hashedPassword) =>
  bcrypt.compare(plainPassword, hashedPassword);

module.exports = {
  validateEmail,
  isStrongPassword,
  hashingPassword,
  comparingPassword,
};
