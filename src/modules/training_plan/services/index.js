const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createTrainingPlan = async (data) => {
    try {
        return await db.training_plan.create(data);
    } catch (e) {
        throw e;
    }
}

const getTrainingPlan = async () => {
    try {
        return await db.training_plan.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdTrainingPlan = async (id) => {
    try {
        return await db.training_plan.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutTrainingPlan = async (id, data) => {
    try {
        return await db.training_plan.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchTrainingPlan = async (id,data) => {
    try {
        return await db.training_plan.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteTrainingPlan = async (id) => {
    try {
        return await db.training_plan.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createTrainingPlan,
    getTrainingPlan,
    getIdTrainingPlan,
    updatePutTrainingPlan,
    updatePatchTrainingPlan,
    deleteTrainingPlan
}