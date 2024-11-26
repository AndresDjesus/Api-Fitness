const express = require('express');
const rTrackingData = express.Router();
const {CreateTrackingDataController, GetIdTrackingDataController, UpdatePutTrackingDataController, UpdatePatchTrackingDataController, DeleteTrackingDataController, GetTrackingDataController} = require('../controllers');

rTrackingData.get('/', async (req, res) => {
    try {
       return await GetTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrackingData.get('/:id', async (req, res) => {
    try {
      return await GetIdTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrackingData.post('/', async (req, res) => {
    try {
        return await CreateTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
  });

rTrackingData.put('/:id',async (req, res) => {
    try {
        return await UpdatePutTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrackingData.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrackingData.delete('/:id', async (req, res) => {
    try {
        return await DeleteTrackingDataController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rTrackingData;