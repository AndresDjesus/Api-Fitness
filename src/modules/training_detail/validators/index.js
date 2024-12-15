const Joi = require('joi');

// Validador para crear un Registro
const validatesSChemaCreateTrainingDetail = Joi.object({
    training_days_per_week: Joi.string().required().messages({
        'any.required': 'Los dias de entrenamiento son requeridos',
        'string.empty': 'Los dias de entrenamiento son requeridos',
    }),
    estimated_duration_per_session : Joi.string().required().messages({
        'any.required': 'La duracion es requerida',
        'string.empty': 'La duracion es requerida',
    }),
    intensity : Joi.string().valid('baja', 'media', 'alta').required().messages({
        'any.required': 'La intensidad es requerida',
        'string.empty': 'La intensidad es requerida',
    }),
    type_of_training : Joi.string().valid('cardio', 'resistencia', 'fuerza', 'mixto').required().messages({
        'any.required': 'El tipo de entrenamiento es requerido',
        'string.empty': 'El tipo de entrenamiento es requerido',
    }),
    specific_objective : Joi.string().required().messages({
        'any.required': 'El objetivo de entrenamiento es requerido',
        'string.empty': 'El objetivo de entrenamiento es requerido',
    }),
});

// Validador para actualizar un registro por medio de PUT
const validatesSChemaUpdatePutTrainingDetail = Joi.object({
    training_days_per_week: Joi.string().required().messages({
        'any.required': 'Los dias de entrenamiento son requeridos',
        'string.empty': 'Los dias de entrenamiento son requeridos',
    }),
    estimated_duration_per_session : Joi.string().required().messages({
        'any.required': 'La duracion es requerida',
        'string.empty': 'La duracion es requerida',
    }),
    intensity : Joi.string().valid('baja', 'media', 'alta').required().messages({
        'any.required': 'La intensidad es requerida',
        'string.empty': 'La intensidad es requerida',
    }),
    type_of_training : Joi.string().valid('cardio', 'resistencia', 'fuerza', 'mixto').required().messages({
        'any.required': 'El tipo de entrenamiento es requerido',
        'string.empty': 'El tipo de entrenamiento es requerido',
    }),
    specific_objective : Joi.string().required().messages({
        'any.required': 'El objetivo de entrenamiento es requerido',
        'string.empty': 'El objetivo de entrenamiento es requerido',
    }),
});

// Validador para actualizar un registro por medio de PATCH
const validatesSChemaUpdatePatchTrainingDetail = Joi.object({
    training_days_per_week: Joi.string().required().messages({
        'any.required': 'Los dias de entrenamiento son requeridos',
        'string.empty': 'Los dias de entrenamiento son requeridos',
    }),
    estimated_duration_per_session : Joi.string().required().messages({
        'any.required': 'La duracion es requerida',
        'string.empty': 'La duracion es requerida',
    }),
    intensity : Joi.string().valid('baja', 'media', 'alta').required().messages({
        'any.required': 'La intensidad es requerida',
        'string.empty': 'La intensidad es requerida',
    }),
    type_of_training : Joi.string().valid('cardio', 'resistencia', 'fuerza', 'mixto').required().messages({
        'any.required': 'El tipo de entrenamiento es requerido',
        'string.empty': 'El tipo de entrenamiento es requerido',
    }),
    specific_objective : Joi.string().required().messages({
        'any.required': 'El objetivo de entrenamiento es requerido',
        'string.empty': 'El objetivo de entrenamiento es requerido',
    }),
});

// Validador para obtener un registro por medio de GET ID
const validatesSChemaGetIdTrainingDetail = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
});

// Validador para eliminar un registro por medio de DELETE ID
const validatesSChemaDeleteTrainingDetail = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del usuario es requerido',
        'number.empty': 'El id del usuario es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateTrainingDetail,
    validatesSChemaUpdatePutTrainingDetail,
    validatesSChemaUpdatePatchTrainingDetail,
    validatesSChemaGetIdTrainingDetail,
    validatesSChemaDeleteTrainingDetail
}