const Joi = require('joi');

// Validador para crear un Registro
const validatesSChemaCreateTrackingData = Joi.object({
    registration_date: Joi.string().required().messages({
        'any.required': 'La fecha de registro es requerida',
        'string.empty': 'La fecha de registro es requerida',
    }),
    last_login : Joi.string().required().messages({
        'any.required': 'El ultimo login es requerido',
        'string.empty': 'El ultimo login es requerido',
    }),
    number_of_plans_completed : Joi.string().required().messages({
        'any.required': 'El numero de plan completado es requerido',
        'string.empty': 'El numero de plan completado es requerido',
    }),
});

// Validador para actualizar un registro por medio de PUT
const validatesSChemaUpdatePutTrackingData = Joi.object({
    registration_date: Joi.string().required().messages({
        'any.required': 'La fecha de registro es requerida',
        'string.empty': 'La fecha de registro es requerida',
    }),
    last_login : Joi.string().required().messages({
        'any.required': 'El ultimo login es requerido',
        'string.empty': 'El ultimo login es requerido',
    }),
    number_of_plans_completed : Joi.string().required().messages({
        'any.required': 'El numero de plan completado es requerido',
        'string.empty': 'El numero de plan completado es requerido',
    }),
});

// Validador para actualizar un registro por medio de PATCH
const validatesSChemaUpdatePatchTrackingData = Joi.object({
    registration_date: Joi.string().required().messages({
        'any.required': 'La fecha de registro es requerida',
        'string.empty': 'La fecha de registro es requerida',
    }),
    last_login : Joi.string().required().messages({
        'any.required': 'El ultimo login es requerido',
        'string.empty': 'El ultimo login es requerido',
    }),
    number_of_plans_completed : Joi.string().required().messages({
        'any.required': 'El numero de plan completado es requerido',
        'string.empty': 'El numero de plan completado es requerido',
    }),
});

// Validador para obtener un registro por medio de GET ID
const validatesSChemaGetIdTrackingData = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
});

// Validador para eliminar un registro por medio de DELETE ID
const validatesSChemaDeleteTrackingData = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del usuario es requerido',
        'number.empty': 'El id del usuario es requerido',
    }),
});

module.exports = {
   validatesSChemaCreateTrackingData,
   validatesSChemaUpdatePutTrackingData,
   validatesSChemaUpdatePatchTrackingData,
   validatesSChemaGetIdTrackingData,
   validatesSChemaDeleteTrackingData
}