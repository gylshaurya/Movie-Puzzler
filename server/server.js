const express = require('express')
const app = express()
app.listen(3000)

const userRouter = require('./routes/userRoutes');
const connectMongoDB = require('./connectMongo')

connectMongoDB('mongodb://127.0.0.1:27017/movie-puzzler')

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Hello world")
})

app.use("/users", userRouter)