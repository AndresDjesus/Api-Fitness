const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createTrackingData = async (data) => {
    try {
        return await db.tracking_data.create(data);
    } catch (e) {
        throw e;
    }
}

const getTrackingData = async () => {
    try {
        return await db.tracking_data.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdTrackingData = async (id) => {
    try {
        return await db.tracking_data.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutTrackingData = async (id, data) => {
    try {
        return await db.tracking_data.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchTrackingData = async (id,data) => {
    try {
        return await db.tracking_data.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteTrackingData = async (id) => {
    try {
        return await db.tracking_data.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createTrackingData, getTrackingData, getIdTrackingData, updatePutTrackingData, updatePatchTrackingData, deleteTrackingData
}