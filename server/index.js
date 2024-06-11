require('dotenv').config()
const { sequelize } = require('./config/db');
const server = require('./src/app');

const PORT = process.env.PORT;

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database connected');
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));
