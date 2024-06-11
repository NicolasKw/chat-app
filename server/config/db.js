require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const defineUser = require('./User');
const defineMessage = require('./Message');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false
    }
);

const User = defineUser(sequelize);
const Message = defineMessage(sequelize);

User.hasMany(Message, { foreignKey: 'username' });
Message.belongsTo(User, { foreignKey: 'username' });

module.exports = { sequelize, ...sequelize.models };
