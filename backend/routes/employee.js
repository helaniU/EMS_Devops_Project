const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee.js");
const Department = require("../models/Department.js");

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().populate("department");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new employee
router.post("/", async (req, res) => {
  try {
    const { name, email, salary, image, departmentId } = req.body;

    const newEmp = new Employee({
      name,
      email,
      salary,
      image,
      department: departmentId
    });

    const savedEmp = await newEmp.save();

    if (departmentId) {
      await Department.findByIdAndUpdate(departmentId, {
        $push: { employees: savedEmp._id }
      });
    }

    res.status(201).json(savedEmp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update employee
router.put("/:id", async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    const oldDept = emp.department;
    const newDept = req.body.department;

    const updatedEmp = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Update departments if changed
    if (oldDept?.toString() !== newDept) {
      if (oldDept) {
        await Department.findByIdAndUpdate(oldDept, { $pull: { employees: emp._id } });
      }
      if (newDept) {
        await Department.findByIdAndUpdate(newDept, { $push: { employees: emp._id } });
      }
    }

    res.json(updatedEmp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete employee
router.delete("/:id", async (req, res) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);

    if (emp && emp.department) {
      await Department.findByIdAndUpdate(emp.department, { $pull: { employees: emp._id } });
    }

    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
