const bcrypt = require("bcrypt");
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).send("Unauthorized: Admin not found");
    }

    // Compare provided password with hashed password in database
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send("Unauthorized: Incorrect password");
    }

    // If credentials are valid, proceed to the next middleware
    next();
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

module.exports = adminMiddleware;
