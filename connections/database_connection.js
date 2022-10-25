const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("test", "root", "1234", {
  host: "localhost",
  dialect: "mysql", //| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = { sequelize };
