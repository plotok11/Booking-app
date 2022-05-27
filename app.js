const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const hotelRoutes = require("./src/routes/hotels")
const authRoutes = require("./src/routes/auth")
const usersRoutes = require("./src/routes/users")
const roomsRoutes = require("./src/routes/rooms")
const { on } = require('nodemon')
const errorHandler = require('./src/middleware/errorHandler')
const cookieParser = require('cookie-parser')


const app = express()
const port = 3000

dotenv.config()

// Mongoose Connection
const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connect to Database Successfully")
  } catch(error){
    throw error
  }  
}

mongoose.connection.on('disconnected', () => {
  console.log("MongoDB disconnected!")
})
mongoose.connection.on('connected', () => {
  console.log("MongoDB connected!")
})
///////////////////////////////////////////////////////////// 

// Middleware
app.use(cookieParser())


app.use(express.json())
app.use(errorHandler)

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomsRoutes);

app.use(errorHandler)

app.listen(port, () => {
  connect()
  console.log(`Example app listening on port ${port}`)
})