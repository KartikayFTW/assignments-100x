// @ts-nocheck
const { User } = require("../db");
const verifyToken = require("../utils/verifyToken");

async function userMiddleware(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const data = verifyToken(bearerToken);
    try {
      const user = await User.findOne({ username: data.username });
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(400).json({ msg: "User not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error" });
    }
  } else {
    return res.status(403).json({ msg: "No token provided" });
  }
}

module.exports = userMiddleware;
