const Joi = require('joi');
const training_details = require('../../../models/training_details');

// Validador para crear un Registro
const validatesSChemaCreateTrainingPlan = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    start_date : Joi.string().required().messages({
        'any.required': 'La fecha de inicio es requerida',
        'string.empty': 'La fecha de inicio es requerida',
    }),
    end_date : Joi.string().required().messages({
        'any.required': 'La fecha de fin es requerida',
        'string.empty': 'La fecha de fin es requerida',
    }),
    training_details_id : Joi.number().required().messages({
        'any.required': 'El detalle de entrenamiento es requerido',
        'string.empty': 'El detalle de entrenamiento es requerido',
    }),
});

// Validador para actualizar un registro por medio de PUT
const validatesSChemaUpdatePutTrainingPlan = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    start_date : Joi.string().required().messages({
        'any.required': 'La fecha de inicio es requerida',
        'string.empty': 'La fecha de inicio es requerida',
    }),
    end_date : Joi.string().required().messages({
        'any.required': 'La fecha de fin es requerida',
        'string.empty': 'La fecha de fin es requerida',
    }),
    training_details_id : Joi.number().required().messages({
        'any.required': 'El detalle de entrenamiento es requerido',
        'string.empty': 'El detalle de entrenamiento es requerido',
    }),
});

// Validador para actualizar un registro por medio de PATCH
const validatesSChemaUpdatePatchTrainingPlan = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    start_date : Joi.string().required().messages({
        'any.required': 'La fecha de inicio es requerida',
        'string.empty': 'La fecha de inicio es requerida',
    }),
    end_date : Joi.string().required().messages({
        'any.required': 'La fecha de fin es requerida',
        'string.empty': 'La fecha de fin es requerida',
    }),
    training_details_id : Joi.number().required().messages({
        'any.required': 'El detalle de entrenamiento es requerido',
        'string.empty': 'El detalle de entrenamiento es requerido',
    }),
});

// Validador para obtener un registro por medio de GET ID
const validatesSChemaGetIdTrainingPlan = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
});

// Validador para eliminar un registro por medio de DELETE ID
const validatesSChemaDeleteTrainingPlan = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del usuario es requerido',
        'number.empty': 'El id del usuario es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateTrainingPlan,
    validatesSChemaUpdatePutTrainingPlan,
    validatesSChemaUpdatePatchTrainingPlan,
    validatesSChemaGetIdTrainingPlan,
    validatesSChemaDeleteTrainingPlan
}