const { DataTypes } = require("sequelize");
const { sequelize } = require("../connections/database_connection");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync() ;
 
module.exports  = { User }


