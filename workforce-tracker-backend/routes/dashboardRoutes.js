const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const router = express.Router();

router.get('/', getDashboardData);

module.exports = router;

