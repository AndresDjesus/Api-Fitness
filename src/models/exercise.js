module.exports = (DataTypes , sequelize) => {
    const Exercise = sequelize.define('Exercise', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        difficulty_level: {
            type: DataTypes.ENUM('baja', 'media', 'alta'),
            allowNull: false
        },        
        main_muscle_group: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondary_muscle_group: {
            type: DataTypes.STRING,
            allowNull: false
        },   
        necessary_equipment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Exercise
}