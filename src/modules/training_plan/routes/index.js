const express = require('express');
const rTrainingPlan = express.Router();
const {CreateTrainingPlanController, GetIdTrainingPlanController, UpdatePutTrainingPlanController, UpdatePatchTrainingPlanController, DeleteTrainingPlanController, GetTrainingPlanController} = require('../controllers');

rTrainingPlan.get('/', async (req, res) => {
    try {
       return await GetTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingPlan.get('/:id', async (req, res) => {
    try {
      return await GetIdTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingPlan.post('/', async (req, res) => {
    try {
        return await CreateTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
  });

rTrainingPlan.put('/:id',async (req, res) => {
    try {
        return await UpdatePutTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingPlan.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
});

rTrainingPlan.delete('/:id', async (req, res) => {
    try {
        return await DeleteTrainingPlanController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rTrainingPlan;