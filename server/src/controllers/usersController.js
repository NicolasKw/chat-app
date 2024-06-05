const { User } = require('../../config/db');

const createUser = async (req, res) => {
    try {
        const { username, hashedPassword, name, lastName } = req.body;

        const user = await User.findOrCreate({
            where: {
                username
            },
            defaults: {
                username,
                hashedPassword,
                name,
                lastName,
                signedIn: true
            }
        });

        res.status(200).send(user);       
    } catch (error) {
        res.status(500).send(error.message);
    };
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

const validateUser = async (req, res) => {
    try {
        const { username, hashedPassword } = req.body;

        const foundUser = await User.findOne({
            where: {
                username,
                hashedPassword
            }
        });

        // If user is validated (found), update signedIn to true
        await User.update({ signedIn: true }, {where: { username }});

        res.status(200).send(foundUser);
    } catch (error) {
        res.status(401).send(error);
    };
};

const signOutUser = async (req, res) => {
    try {
        const { username } = req.params;
    
        await User.update({ signedIn: false }, {where: { username }});

        res.status(200).send({ username, signedIn: false });
    } catch (error) {
        res.status(500).send(error);
    };
};

module.exports = {
    createUser,
    getUsers,
    validateUser,
    signOutUser
};
