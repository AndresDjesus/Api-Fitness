const {validatesSChemaCreateTrainingPlan, validatesSChemaGetIdTrainingPlan, validatesSChemaUpdatePutTrainingPlan, validatesSChemaUpdatePatchTrainingPlan, validatesSChemaDeleteTrainingPlan} = require('../validators');

const {createTrainingPlan, getIdTrainingPlan, updatePutTrainingPlan, updatePatchTrainingPlan, deleteTrainingPlan, getTrainingPlan} = require('../services');
const training_plan = require('../../../models/training_plan');

const CreateTrainingPlanController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateTrainingPlan.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const trainingPlan = await createTrainingPlan(req.body);
        return res.json(trainingPlan);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdTrainingPlanController = async (req, res) => {
    try {
        const { id } = req.params;
        const trainingPlan = await getIdTrainingPlan(id);
        return res.json(trainingPlan);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutTrainingPlanController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutTrainingPlan.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrainingData = req.body; 
        const trackingData = await updatePutTrainingPlan(id, {...updatedTrainingData});
        if(trackingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrainingData} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchTrainingPlanController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchTrainingPlan.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrainingData = req.body; 
        const trainingData = await updatePatchTrainingPlan(id, {...updatedTrainingData});
        if(trainingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrainingData} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteTrainingPlanController = async (req, res) => {
    try {
        const { id } = req.params;
        const trainingData = await deleteTrainingPlan(id);
        if(trainingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetTrainingPlanController = async (req, res) => {
    try {
        const trainingData = await getTrainingPlan();
        return res.json(trainingData);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateTrainingPlanController,
    GetIdTrainingPlanController,
    UpdatePutTrainingPlanController,
    UpdatePatchTrainingPlanController,
    DeleteTrainingPlanController,
    GetTrainingPlanController
}