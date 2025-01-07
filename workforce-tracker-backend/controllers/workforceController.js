const User = require('../models/User');
const Task = require('../models/Task');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    const task = new Task({ title, description, assignedTo });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getAllUsers,
  createTask,
};
