const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EMS_DBmodel2 = require ("./models/Employee.js"); // updated import
const EMS_DBmodel3 = require("./models/Department.js");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/EMS_DB")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => console.log(err));

// Routes
const employeeRoutes = require("./routes/employee"); // adjust path if different
const departmentRoutes = require("./routes/department"); // adjust path if different
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
