const Joi = require('joi');

// Validador para crear un ejercicio
const validatesSChemaCreateExercise = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    difficulty_level: Joi.string().valid('baja', 'media', 'alta').required().messages({
        'string.empty': 'El nivel de dificultad es requerido',
        'any.required': 'El nivel de dificultad es requerido',
    }),
    main_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular principal es requerido',
        'string.empty': 'El grupo muscular principal es requerido',
    }),
    secondary_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular secundario es requerido',
        'string.empty': 'El grupo muscular secundario es requerido',
    }),
    necessary_equipment: Joi.string().required().messages({
        'any.required': 'El equipo necesario es requerido',
        'string.empty': 'El equipo necesario es requerido',
    })

});

// Validador para actualizar un ejercicio por medio de PUT
const validatesSChemaUpdatePutExercise = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    difficulty_level: Joi.string().valid('baja', 'media', 'alta').required().messages({
        'string.empty': 'El nivel de dificultad es requerido',
        'any.required': 'El nivel de dificultad es requerido',
    }),
    main_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular principal es requerido',
        'string.empty': 'El grupo muscular principal es requerido',
    }),
    secondary_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular secundario es requerido',
        'string.empty': 'El grupo muscular secundario es requerido',
    }),
    necessary_equipment: Joi.string().required().messages({
        'any.required': 'El equipo necesario es requerido',
        'string.empty': 'El equipo necesario es requerido',
    })
});

// Validador para actualizar un ejercicio por medio de PATCH
const validatesSChemaUpdatePatchExercise = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    description : Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
    difficulty_level: Joi.string().valid('baja', 'media', 'alta').required().messages({
        'string.empty': 'El nivel de dificultad es requerido',
        'any.required': 'El nivel de dificultad es requerido',
    }),
    main_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular principal es requerido',
        'string.empty': 'El grupo muscular principal es requerido',
    }),
    secondary_muscle_group: Joi.string().required().messages({
        'any.required': 'El grupo muscular secundario es requerido',
        'string.empty': 'El grupo muscular secundario es requerido',
    }),
    necessary_equipment: Joi.string().required().messages({
        'any.required': 'El equipo necesario es requerido',
        'string.empty': 'El equipo necesario es requerido',
    })

});

// Validador para obtener un ejercicio por medio de GET ID
const validatesSChemaGetIdExercise = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del ejercicio es requerido',
        'number.empty': 'El id del ejercicio es requerido',
    }),
});

// Validador para eliminar un ejercicio por medio de DELETE ID
const validatesSChemaDeleteExercise = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del ejercicio es requerido',
        'number.empty': 'El id del ejercicio es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateExercise,
    validatesSChemaUpdatePutExercise,
    validatesSChemaUpdatePatchExercise,
    validatesSChemaGetIdExercise,
    validatesSChemaDeleteExercise
}