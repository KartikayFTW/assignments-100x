// @ts-nocheck
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const createToken = require("../utills/createToken");
const bcrypt = require("bcrypt");

// User Routes
router.post("/users/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/users/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = createToken(username); // Use the same createToken function from the admin routes
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/users/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/users/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const user = req.user;
  try {
    const course = await Course.findOne({ _id: courseId });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (user.purchasedCourses.includes(courseId)) {
      return res.status(409).json({ message: "Course already purchased" });
    }

    user.purchasedCourses.push(courseId);
    await user.save();

    res.status(200).json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/users/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const courses = await Course.find({ _id: { $in: user.purchasedCourses } });

    res.status(200).json({ purchasedCourses: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
