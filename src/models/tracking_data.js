module.exports = (DataTypes , sequelize) => {
    const Tracking_data = sequelize.define('Tracking_data', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        registration_date : {
            type: DataTypes.DATE,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE,
            allowNull: false
        },
        number_of_plans_completed : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Tracking_data
}