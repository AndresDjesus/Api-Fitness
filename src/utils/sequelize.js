const { allow } = require('joi');
const { Sequelize, DataTypes } = require('sequelize');
const { DB_HOST, DB_DIALECT, DB_USER, DB_PASSWORD, DB_ALTER_SYNC, DB_FORCE_SYNC } = process.env;


const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: 'fitness',
});

console.log();


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Agregar modelos
  db.user = require('../models/user')(DataTypes, sequelize);
  db.tracking_data = require('../models/tracking_data')(DataTypes, sequelize);
  db.training_plan = require('../models/training_plan')(DataTypes, sequelize);
  db.training_details = require('../models/training_details')(DataTypes, sequelize);

// relationships 

db.tracking_data.hasMany(db.user, { foreignKey: 'tracking_data_id' });
db.user.belongsTo(db.tracking_data, { as: 'tracking_data', foreignKey: 'tracking_data_id' });

db.training_plan.hasMany(db.user, { foreignKey: 'training_plan_id' });
db.user.belongsTo(db.training_plan, { as: 'training_plan', foreignKey: 'training_plan_id' });

db.sequelize.sync({
    alter: true,
    force: false,
  });
  
  module.exports = db;