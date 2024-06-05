const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        from: {
            type: DataTypes.STRING,
            allowNull: false
        },
        to: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Message;
};
