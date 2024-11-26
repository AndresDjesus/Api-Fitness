module.exports = (DataTypes , sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender : {
            type: DataTypes.ENUM('masculino', 'femenino', 'otro'),
            allowNull: false
        },
        wehight : {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        height : {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        training_goals : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fitness_level : {
            type: DataTypes.ENUM('principiante', 'intermedio', 'avanzado'),
            allowNull: false
        },
        actividad_level : {
            type: DataTypes.ENUM('sedentario', 'poca', 'moderada', 'alta'),
            allowNull: false
        },
        training_history : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        health_data : {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return User
}