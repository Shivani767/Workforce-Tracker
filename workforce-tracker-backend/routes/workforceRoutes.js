const express = require('express');
const { getAllUsers, createTask } = require('../controllers/workforceController');
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/tasks', createTask);

module.exports = router;
