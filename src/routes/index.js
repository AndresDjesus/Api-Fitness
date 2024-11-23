const express = require('express');

const rUser = require('../modules/user/routes');
const router = express.Router();


router.use('/user', rUser);


module.exports = router;