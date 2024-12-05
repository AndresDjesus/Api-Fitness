const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createTrainingDetail = async (data) => {
    try {
        return await db.training_details.create(data);
    } catch (e) {
        throw e;
    }
}

const getTrainingDetail = async () => {
    try {
        return await db.training_details.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdTrainingDetail = async (id) => {
    try {
        return await db.training_details.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutTrainingDetail = async (id, data) => {
    try {
        return await db.training_details.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchTrainingDetail = async (id,data) => {
    try {
        return await db.training_details.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteTrainingDetail = async (id) => {
    try {
        return await db.training_details.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createTrainingDetail,
    getTrainingDetail,
    getIdTrainingDetail,
    updatePutTrainingDetail,
    updatePatchTrainingDetail,
    deleteTrainingDetail
}