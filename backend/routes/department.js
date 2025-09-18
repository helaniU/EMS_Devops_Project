const express = require("express");
const router = express.Router();
const Department = require("../models/Department.js");

// Get all departments with employees
router.get("/", async (req, res) => {
  try {
    const depts = await Department.find().populate("employees");
    res.json(depts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new department
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const dept = new Department({ name, employees: [] });
    await dept.save();
    res.status(201).json(dept);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
