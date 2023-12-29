const jwt = require("jsonwebtoken");
const jwtSecret = "your-secret-key"; // This should be an environment variable

const verifyToken = (token) => {
  try {
    const data = jwt.verify(token, jwtSecret);
    return data;
  } catch (error) {
    console.error("Token verification error:", error.message);
    return null;
  }
};

module.exports = verifyToken;
