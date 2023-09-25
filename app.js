const express = require('express');
const app =express();
const dotenv = require('dotenv');
const connectDatabse = require('./config/databse')

//setting up config.env file variable
dotenv.config({path:'./config/config.env'})

//connecting to database
connectDatabse()

//setting body parser
app.use(express.json())

//Importing all routes
const jobs = require('./routes/jobs')

app.use('/api/v1',jobs)
const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT} in ${process.env.NODE_ENV}`);
})