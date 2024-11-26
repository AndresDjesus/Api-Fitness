const express = require('express');

const rUser = require('../modules/user/routes');
const rTrackingData = require('../modules/tracking_data/routes');
const router = express.Router();


router.use('/user', rUser);
router.use('/tracking_data', rTrackingData);


module.exports = router;