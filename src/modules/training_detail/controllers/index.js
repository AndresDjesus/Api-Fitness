const {validatesSChemaCreateTrainingDetail, validatesSChemaGetIdTrainingDetail, validatesSChemaUpdatePutTrainingDetail, validatesSChemaUpdatePatchTrainingDetail, validatesSChemaDeleteTrainingDetail} = require('../validators');

const {createTrainingDetail, getIdTrainingDetail, updatePutTrainingDetail, updatePatchTrainingDetail, deleteTrainingDetail, getTrainingDetail} = require('../services');
const training_detail = require('../../../models/training_details');

const CreateTrainingDetailController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateTrainingDetail.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const trainingDetail = await createTrainingDetail(req.body);
        return res.json(trainingDetail);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdTrainingDetailController = async (req, res) => {
    try {
        const { id } = req.params;
        const trainingDetail = await getIdTrainingDetail(id);
        return res.json(trainingDetail);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutTrainingDetailController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutTrainingDetail.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrainingDetail = req.body; 
        const trackingDetail = await updatePutTrainingDetail(id, {...updatedTrainingDetail});
        if(trackingDetail[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrainingDetail} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchTrainingDetailController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchTrainingDetail.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrainingDetail = req.body; 
        const trainingDetail = await updatePatchTrainingDetail(id, {...updatedTrainingDetail});
        if(trainingDetail[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrainingDetail} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteTrainingDetailController = async (req, res) => {
    try {
        const { id } = req.params;
        const trainingDetail = await deleteTrainingDetail(id);
        if(trainingDetail[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetTrainingDetailController = async (req, res) => {
    try {
        const trainingDetail = await getTrainingDetail();
        return res.json(trainingDetail);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateTrainingDetailController,
    GetIdTrainingDetailController,
    UpdatePutTrainingDetailController,
    UpdatePatchTrainingDetailController,
    DeleteTrainingDetailController,
    GetTrainingDetailController
}