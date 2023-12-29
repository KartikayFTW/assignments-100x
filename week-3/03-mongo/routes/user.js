// @ts-nocheck
const { Router } = require("express");
const express = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        // 409 Conflict is more appropriate for duplicate resource creation
        message: "User already exists",
      });
    }

    // Assuming you are hashing passwords before saving
    const user = new User({
      username,
      password,
    });

    await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courseId = req.params;

  //   const courses = await Course.find({});
  //   return res.status(201).json({
  //     courses,
  //   });
  return res.status(201).json({
    courseId,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;
  console.log(username);
  console.log(courseId);
  try {
    const course = await Course.findOne({ _id: courseId });
    const user = await User.findOne({ username });
    // console.log(user, course);
    if (!user || !course) {
      throw new Error("User or Course not found");
    }
    const isAlreadyPurchased = user.purchasedCourses.includes(courseId);
    if (isAlreadyPurchased) {
      // If already purchased, send response and stop further execution
      return res
        .status(409)
        .json({ message: "You have already purchased this course" });
    }

    user.purchasedCourses.push(courseId);
    await user.save(); // Save changes to the user
    // Send response for successful purchase
    return res.status(200).json({ message: "Course purchased successfully" });
  } catch (err) {
    console.error(err); // Log the error
    return res.status(500).send("Internal Server Error"); // Send an appropriate response
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  try {
    const user = await User.findOne({ username });
    const purchasedCourseIds = user.purchasedCourses;
    const purchasedCourses = await Course.find({
      _id: { $in: purchasedCourseIds },
    });
    return res.status(201).json({
      purchasedCourses,
    });
  } catch (err) {
    console.error(err); // Log the error
    return res.status(500).send("Internal Server Error"); // Send an appropriate response
  }
});

module.exports = router;
