const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createUser = async (data) => {
    try {
        return await db.user.create(data);
    } catch (e) {
        throw e;
    }
}

const getUsers = async () => {
    try {
        return await db.user.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdUser = async (id) => {
    try {
        return await db.user.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutUser = async (id, data) => {
    try {
        return await db.user.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchUser = async (id,data) => {
    try {
        return await db.user.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteUser = async (id) => {
    try {
        return await db.user.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createUser , getUsers, getIdUser, updatePatchUser, updatePutUser, deleteUser
}