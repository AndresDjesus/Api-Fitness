module.exports = (DataTypes , sequelize) => {
    const Training_details = sequelize.define('Training_details', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        training_days_per_week: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estimated_duration_per_session: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        intensity: {
            type: DataTypes.ENUM('baja', 'media', 'alta'),
            allowNull: false
        },        
        type_of_training: {
            type: DataTypes.ENUM('cardio', 'resistencia','fuerza','mixto'),
            allowNull: false
        },
        specific_objective: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Training_details
}