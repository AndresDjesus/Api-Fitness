const express = require('express');
const rTrainingDetail = express.Router();
const {CreateTrainingDetailController, GetIdTrainingDetailController, UpdatePutTrainingDetailController, UpdatePatchTrainingDetailController, DeleteTrainingDetailController, GetTrainingDetailController} = require('../controllers');

rTrainingDetail.get('/', async (req, res) => {
    try {
       return await GetTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingDetail.get('/:id', async (req, res) => {
    try {
      return await GetIdTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingDetail.post('/', async (req, res) => {
    try {
        return await CreateTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
  });

rTrainingDetail.put('/:id',async (req, res) => {
    try {
        return await UpdatePutTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingDetail.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingDetail.delete('/:id', async (req, res) => {
    try {
        return await DeleteTrainingDetailController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rTrainingDetail;