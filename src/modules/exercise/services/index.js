const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createExercise = async (data) => {
    try {
        return await db.exercise.create(data);
    } catch (e) {
        throw e;
    }
}

const getExercises = async () => {
    try {
        return await db.exercise.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdExercise = async (id ) => 
    {
    try {
        return await db.exercise.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutExercise = async (id, data) => {
    try {
        return await db.exercise.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchExercise = async (id,data) => {
    try {
        return await db.exercise.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteExercise = async (id) => {
    try {
        return await db.exercise.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createExercise,
    getExercises,
    getIdExercise,
    updatePutExercise,
    updatePatchExercise,
    deleteExercise
}