const { Message } = require('../../config/db');

const createMessage = async (req, res) => {
    try {
        const { username, to, text } = req.body;

        const message = await Message.create({
            username,
            to,
            text
        })

        res.status(200).send(message);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();

        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createMessage,
    getMessages
};
