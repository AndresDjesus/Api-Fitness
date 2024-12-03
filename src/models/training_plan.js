module.exports = (DataTypes , sequelize) => {
    const Training_plan = sequelize.define('Training_plan', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Training_plan
}