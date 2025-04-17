const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  department: String,
  salary: Number,
  dateOfJoining: Date,
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    default: null
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
