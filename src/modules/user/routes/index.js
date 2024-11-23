const express = require('express');
const rUser = express.Router();
const {CreateUserController, GetIdUserController, UpdatePutUserController, UpdatePatchUserController, DeleteUserController, GetUsersController} = require('../controllers');

rUser.get('/', async (req, res) => {
    try {
       return await GetUsersController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.get('/:id', async (req, res) => {
    try {
      return await GetIdUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.post('/', async (req, res) => {
    try {
        return await CreateUserController(req, res);
    } catch (err) {
        throw err;
    }
  });

rUser.put('/:id',async (req, res) => {
    try {
        return await UpdatePutUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.delete('/:id', async (req, res) => {
    try {
        return await DeleteUserController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rUser;