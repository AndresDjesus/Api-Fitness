const express = require('express');

const rUser = require('../modules/user/routes');
const rTrackingData = require('../modules/tracking_data/routes');
const rTrainingPlan = require('../modules/training_plan/routes');
const router = express.Router();


router.use('/user', rUser);
router.use('/tracking_data', rTrackingData);
router.use('/training_plan', rTrainingPlan);


module.exports = router;