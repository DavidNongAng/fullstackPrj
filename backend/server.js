const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

//Middleware to parse JSON data. 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));