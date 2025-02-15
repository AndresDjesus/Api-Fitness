const Joi = require('joi');
const tracking_data = require('../../../models/tracking_data');
const training_plan = require('../../../models/training_plan');

// Validador para crear un usuario
const validatesSChemaCreateUser = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    email: Joi.string().required().messages({
        'any.required': 'El email es requerido',
        'string.empty': 'El email es requerido',
    }),
    password: Joi.string().required().messages({
        'any.required': 'El password es requerido',
        'string.empty': 'El password es requerido',
    }),
    birthdate: Joi.string().required().messages({
        'any.required': 'La fecha de nacimiento es requerida',
        'string.empty': 'La fecha de nacimiento es requerida',
    }),
    gender: Joi.string().valid('masculino', 'femenino', 'otro').required().messages({
        'string.empty': 'El genero es requerido',
        'any.required': 'El genero es requerido',
    }),
    height: Joi.string().required().messages({
        'any.required': 'La altura es requerida',
        'string.empty': 'La altura es requerida',
    }),
    wehight: Joi.string().required().messages({
        'any.required': 'El peso es requerido',
        'string.empty': 'El peso es requerido',
    }),
    training_goals: Joi.string().required().messages({
        'any.required': 'Los objetivos de entrenamiento son obligatorios',
        'string.empty': 'Los objetivos de entrenamiento son obligatorios',
    }),
    fitness_level: Joi.string().valid('principiante', 'intermedio', 'avanzado').required().messages({
        'string.empty': 'El nivel de entrenamiento es requerido',
        'any.required': 'El nivel de entrenamiento es requerido',
    }),
    actividad_level: Joi.string().valid('sedentario', 'poca', 'moderada', 'alta').required().messages({
        'string.empty': 'El nivel de actividad es requerido',
        'any.required': 'El nivel de actividad es requerido',
    }),
    training_history: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    health_data: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    tracking_data_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
    training_plan_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),

});

// Validador para actualizar un user por medio de PUT
const validatesSChemaUpdatePutUser = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    email: Joi.string().required().messages({
        'any.required': 'El email es requerido',
        'string.empty': 'El email es requerido',
    }),
    password: Joi.string().required().messages({
        'any.required': 'El password es requerido',
        'string.empty': 'El password es requerido',
    }),
    birthdate: Joi.string().required().messages({
        'any.required': 'La fecha de nacimiento es requerida',
        'string.empty': 'La fecha de nacimiento es requerida',
    }),
    gender: Joi.string().valid('masculino', 'femenino', 'otro').required().messages({
        'string.empty': 'El genero es requerido',
        'any.required': 'El genero es requerido',
    }),
    height: Joi.string().required().messages({
        'any.required': 'La altura es requerida',
        'string.empty': 'La altura es requerida',
    }),
    wehight: Joi.string().required().messages({
        'any.required': 'El peso es requerido',
        'string.empty': 'El peso es requerido',
    }),
    training_goals: Joi.string().required().messages({
        'any.required': 'Los objetivos de entrenamiento son obligatorios',
        'string.empty': 'Los objetivos de entrenamiento son obligatorios',
    }),
    fitness_level: Joi.string().valid('principiante', 'intermedio', 'avanzado').required().messages({
        'string.empty': 'El nivel de entrenamiento es requerido',
        'any.required': 'El nivel de entrenamiento es requerido',
    }),
    actividad_level: Joi.string().valid('sedentario', 'poca', 'moderada', 'alta').required().messages({
        'string.empty': 'El nivel de actividad es requerido',
        'any.required': 'El nivel de actividad es requerido',
    }),
    training_history: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    health_data: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    tracking_data_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
    training_plan_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
});

// Validador para actualizar un user por medio de PATCH
const validatesSChemaUpdatePatchUser = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    email: Joi.string().required().messages({
        'any.required': 'El email es requerido',
        'string.empty': 'El email es requerido',
    }),
    password: Joi.string().required().messages({
        'any.required': 'El password es requerido',
        'string.empty': 'El password es requerido',
    }),
    birthdate: Joi.string().required().messages({
        'any.required': 'La fecha de nacimiento es requerida',
        'string.empty': 'La fecha de nacimiento es requerida',
    }),
    gender: Joi.string().valid('masculino', 'femenino', 'otro').required().messages({
        'string.empty': 'El genero es requerido',
        'any.required': 'El genero es requerido',
    }),
    height: Joi.string().required().messages({
        'any.required': 'La altura es requerida',
        'string.empty': 'La altura es requerida',
    }),
    wehight: Joi.string().required().messages({
        'any.required': 'El peso es requerido',
        'string.empty': 'El peso es requerido',
    }),
    training_goals: Joi.string().required().messages({
        'any.required': 'Los objetivos de entrenamiento son obligatorios',
        'string.empty': 'Los objetivos de entrenamiento son obligatorios',
    }),
    fitness_level: Joi.string().valid('principiante', 'intermedio', 'avanzado').required().messages({
        'string.empty': 'El nivel de entrenamiento es requerido',
        'any.required': 'El nivel de entrenamiento es requerido',
    }),
    actividad_level: Joi.string().valid('sedentario', 'poca', 'moderada', 'alta').required().messages({
        'string.empty': 'El nivel de actividad es requerido',
        'any.required': 'El nivel de actividad es requerido',
    }),
    training_history: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    health_data: Joi.string().required().messages({
        'any.required': 'El historial de entrenamiento es obligatorio',
        'string.empty': 'El historial de entrenamiento es obligatorio',
    }),
    tracking_data_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
    training_plan_id: Joi.number().required().messages({
        'any.required': 'El id del registro es requerido',
        'number.empty': 'El id del registro es requerido',
    }),
});

// Validador para obtener un user por medio de GET ID
const validatesSChemaGetIdUser = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del usuario es requerido',
        'number.empty': 'El id del usuario es requerido',
    }),
});

// Validador para eliminar un motor por medio de DELETE ID
const validatesSChemaDeleteUser = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del usuario es requerido',
        'number.empty': 'El id del usuario es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateUser,
    validatesSChemaUpdatePutUser,
    validatesSChemaUpdatePatchUser,
    validatesSChemaGetIdUser,
    validatesSChemaDeleteUser
}