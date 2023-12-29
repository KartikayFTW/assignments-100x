// @ts-nocheck
const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  try {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await Admin.findOne({ username: username });
    console.log(existingUser);
    if (existingUser) {
      res.status(411).json({
        message: "Admin already exist",
      });
    } else {
      const admin = new Admin({ username, password });
      await admin.save();
      res.status(201).json({ message: "Admin created successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { title, description, price, imageLink } = req.body;
    const course = new Course({ title, description, price, imageLink });
    await course.save();
    res
      .status(201)
      .json({ message: "Course created successfully", courseId: course.id });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.status(201).json({ courses: courses });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
