const { User } = require("../db");
const bcrypt = require("bcrypt");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send("Unauthorized: user not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Unauthorized: Incorrect password");
    }
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = userMiddleware;
