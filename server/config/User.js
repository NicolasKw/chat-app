const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        signedIn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    return User;
};
