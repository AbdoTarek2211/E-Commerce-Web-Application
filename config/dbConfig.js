const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database Connected!`);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {connectDB};
