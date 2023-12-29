const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

// Reset the request count every second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000); // Every second, not 5000 milliseconds

const rateLimit = (req, res, next) => {
  const userId = req.headers["user-id"];

  if (!userId) {
    return res.status(400).send("User ID is required");
  }

  // Initialize user's request count if not present
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 0;
  }

  // Increment request count
  numberOfRequestsForUser[userId]++;

  // Check if the request count exceeds 5
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send("Rate limit exceeded");
  }

  next();
};

app.use(rateLimit);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});

module.exports = app;
