const {validatesSChemaCreateExercise, validatesSChemaGetIdExercise, validatesSChemaUpdatePutExercise, validatesSChemaUpdatePatchExercise, validatesSChemaDeleteExercise} = require('../validators');

const {createExercise, getIdExercise, updatePutExercise, updatePatchExercise, deleteExercise, getExercises} = require('../services');

const CreateExerciseController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateExercise.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const exercise = await createExercise(req.body);
        return res.json(exercise);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdExerciseController = async (req, res) => {
    try {
        const { id } = req.params;
        const exercise = await getIdExercise(id);
        return res.json(exercise);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutExerciseController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutExercise.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedExercise = req.body; 
        const exercise = await updatePutExercise(id, {...updatedExercise});
        if(exercise[0] === 0) {
            return res.status(404).json({ message: 'Ejercicio no encontrado' });
        }
        res.status(200).json({ message: 'Ejercicio actualizado correctamente', data: {...updatedExercise} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchExerciseController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchExercise.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedExercise = req.body;
        const exercise = await updatePatchExercise(id, {...updatedExercise});
        if(exercise[0] === 0) {
            return res.status(404).json({ message: 'Ejercicio no encontrada' });
        }
        res.status(200).json({ message: 'Ejercicio actualizado correctamente', data: {...updatedExercise} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteExerciseController = async (req, res) => {
    try {
        const { id } = req.params;
        const exercise = await deleteExercise(id);
        if(exercise[0] === 0) {
            return res.status(404).json({ message: 'Ejercicio no encontrado' });
        }
        res.status(200).json({ message: 'Ejercicio eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetExercisesController = async (req, res) => {
    try {
        const exercises = await getExercises();
        return res.json(exercises);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateExerciseController,
    GetIdExerciseController,
    UpdatePutExerciseController,
    UpdatePatchExerciseController,
    DeleteExerciseController,
    GetExercisesController
}