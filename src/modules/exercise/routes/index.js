const express = require('express');
const rExercise = express.Router();
const {CreateExerciseController, GetIdExerciseController, UpdatePutExerciseController, UpdatePatchExerciseController, DeleteExerciseController, GetExercisesController} = require('../controllers');

rExercise.get('/', async (req, res) => {
    try {
       return await GetExercisesController(req, res);
    } catch (err) {
        throw err;
    }
});

rExercise.get('/:id', async (req, res) => {
    try {
      return await GetIdExerciseController(req, res);
    } catch (err) {
        throw err;
    }
});

rExercise.post('/', async (req, res) => {
    try {
        return await CreateExerciseController(req, res);
    } catch (err) {
        throw err;
    }
  });

rExercise.put('/:id',async (req, res) => {
    try {
        return await UpdatePutExerciseController(req, res);
    } catch (err) {
        throw err;
    }
});

rExercise.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchExerciseController(req, res);
    } catch (err) {
        throw err;
    }
});

rExercise.delete('/:id', async (req, res) => {
    try {
        return await DeleteExerciseController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rExercise;