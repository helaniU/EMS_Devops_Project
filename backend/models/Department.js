const mongoose = require('mongoose');

const EMS_DBSchema3 = new mongoose.Schema({
  department: { type: String, required: true, unique: true },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee"
    }
  ]
});

const EMS_DBmodel3 = mongoose.model("departments", EMS_DBSchema3); 

module.exports = EMS_DBmodel3;