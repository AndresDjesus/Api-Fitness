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
        return await db.training_plan.findByPk(id , {
            attributes: ['id', 'name', 'description', 'start_date', 'end_date'],
            include : [
                {
                    model: db.training_details,
                    as : 'training_details',
                    attributes: ['id', 'training_days_per_week', 'estimated_duration_per_session', 'intensity', 'type_of_training', 'specific_objective']
                }
            ]
        });
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