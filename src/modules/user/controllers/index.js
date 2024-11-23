const {validatesSChemaCreateUser, validatesSChemaGetIdUser, validatesSChemaUpdatePutUser, validatesSChemaUpdatePatchUser, validatesSChemaDeleteUsere} = require('../validators');

const {createUser, getIdUser, updatePutUser, updatePatchUser, deleteUser, getUsers} = require('../services');

const CreateUserController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateUser.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const user = await createUser(req.body);
        return res.json(user);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getIdUser(id);
        return res.json(user);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutUserController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutUser.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedUser = req.body; //datos del motor actualizado
        const user = await updatePutUser(id, {...updatedUser});
        if(user[0] === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado correctamente', data: {...updatedUser} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchUserController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchUser.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedUser = req.body; //datos del motor actualizado
        const user = await updatePatchUser(id, {...updatedUser});
        if(user[0] === 0) {
            return res.status(404).json({ message: 'Usuario no encontrada' });
        }
        res.status(200).json({ message: 'Usuario actualizado correctamente', data: {...updatedUser} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await deleteUser(id);
        if(user[0] === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetUsersController = async (req, res) => {
    try {
        const users = await getUsers();
        return res.json(users);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateUserController,
    GetIdUserController,
    UpdatePutUserController,
    UpdatePatchUserController,
    DeleteUserController,
    GetUsersController
}