const Employee = require('../models/Employee');

// Add new employee
exports.addEmployee = async (req, res) => {
  try {
    const newEmp = await Employee.create(req.body);
    res.status(201).json(newEmp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('managerId', 'name position');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single employee
exports.getEmployee = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id).populate('managerId', 'name position');
    res.json(emp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get subordinates of a manager
exports.getSubordinates = async (req, res) => {
  try {
    const subs = await Employee.find({ managerId: req.params.id });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
