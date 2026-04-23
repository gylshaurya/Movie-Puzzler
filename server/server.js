const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movie-puzzler')
.then(()=>console.log('MongoDB Connected'))
.catch((error) => console.log("Mongo Error", error))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required:true,
        unique:true
    } 
})

const User = mongoose.model("user", userSchema) 

app.listen(3000)

app.get('/', (req,res) =>{
    res.send("Hello world")
})

app.get('/users', async(req,res) =>{
    const DbUsers = await User.find({})
})

app.post("/users", async(req, res) =>{
    const body = req.body;
    console.log(body);

    if(!body || !body.firstName || !body.lastName || !body.email){
        return res.status(400).json({msg: "All Fields are required"})
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
    })

})