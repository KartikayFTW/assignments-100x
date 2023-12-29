const jwt = require("jsonwebtoken");
const jwtSecret = "your-secret-key"; // This should be an environment variable

function createToken(username) {
  return jwt.sign({ username }, jwtSecret, { expiresIn: "1h" });
}

module.exports = createToken;
