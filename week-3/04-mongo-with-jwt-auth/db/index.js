// @ts-nocheck
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb-url");
const saltRounds = 10;

// Hash password before saving to the database
function hashPassword(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  // Generate a salt and hash the password
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
}

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
AdminSchema.pre("save", hashPassword);

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  purchasedCourses: [{ type: String }],
});
UserSchema.pre("save", hashPassword);

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
