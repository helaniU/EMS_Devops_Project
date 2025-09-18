const mongoose = require('mongoose');

const EMS_DBSchema2 = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: String, required: true },
  image: { type: String },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  }
});

const EMS_DBmodel2 = mongoose.model("employees", EMS_DBSchema2); // collection: users

module.exports = EMS_DBmodel2;
