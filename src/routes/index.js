const express = require('express');

const rUser = require('../modules/user/routes');
const rTrackingData = require('../modules/tracking_data/routes');
const rTrainingPlan = require('../modules/training_plan/routes');
const rTrainingDetail = require('../modules/training_detail/routes');
const rExercise = require('../modules/exercise/routes');
const router = express.Router();


router.use('/user', rUser);
router.use('/tracking_data', rTrackingData);
router.use('/training_plan', rTrainingPlan);
router.use('/training_detail', rTrainingDetail);
router.use('/exercise', rExercise);





module.exports = router;