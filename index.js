const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const { errorHandler, notFound } = require('./middlewares/errorHandler');
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/api/user',authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server is Running On Port ${PORT}`);
});