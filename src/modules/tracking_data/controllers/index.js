const {validatesSChemaCreateTrackingData, validatesSChemaGetIdTrackingData, validatesSChemaUpdatePutTrackingData, validatesSChemaUpdatePatchTrackingData, validatesSChemaDeleteTrackingData} = require('../validators');

const {createTrackingData, getIdTrackingData, updatePutTrackingData, updatePatchTrackingData, deleteTrackingData, getTrackingData} = require('../services');

const CreateTrackingDataController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateTrackingData.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const trackingData = await createTrackingData(req.body);
        return res.json(trackingData);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdTrackingDataController = async (req, res) => {
    try {
        const { id } = req.params;
        const trackingData = await getIdTrackingData(id);
        return res.json(trackingData);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutTrackingDataController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutTrackingData.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrackingData = req.body; 
        const trackingData = await updatePutTrackingData(id, {...updatedTrackingData});
        if(trackingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrackingData} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchTrackingDataController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchTrackingData.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTrackingData = req.body; 
        const trackingData = await updatePatchTrackingData(id, {...updatedTrackingData});
        if(trackingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado correctamente', data: {...updatedTrackingData} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteTrackingDataController = async (req, res) => {
    try {
        const { id } = req.params;
        const trackingData = await deleteTrackingData(id);
        if(trackingData[0] === 0) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetTrackingDataController = async (req, res) => {
    try {
        const trackingData = await getTrackingData();
        return res.json(trackingData);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateTrackingDataController,
    GetIdTrackingDataController,
    UpdatePutTrackingDataController,
    UpdatePatchTrackingDataController,
    DeleteTrackingDataController,
    GetTrackingDataController
}