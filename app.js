const cookieParser = require('cookie-parser');
const express = require('express');
const{connect} = require('http2');
const mongoose = require('mongoose');
const User = require('./Model/user')
const connectDB = require('./server');
const {route} = require('./Routes/UserRoute');
const routes = require('./Routes/UserRoute');


const app = express();

app.use(express.json());
app.use(cookieParser());

const url = 'mongodb+srv://firstuser:authenticated%40IBA@webdevproject.tol6zwu.mongodb.net/Project?retryWrites=true&w=majority'; 
const port = 3000;

const start = async() => {
    try {
        await connectDB(url);
        app.listen(port, () =>
            console.log("server is running on the port 3000.."))
    } catch (error) {
        console.log(error);
    }
};
app.post('/register', (req, res) => {
    try {
        const user = new User(req.body)
        user.save()
            .then(result => {
                res.send(req.body)
            })
        
    } catch (error) {
        console.log(error);
    }
})

app.get('/user/', (req, res) => {
    try {   
        User.find()
            .then(result => {
                res.send(result)
            })
    } catch (error) {
        console.log(error);
    }
})

app.put('/update/:id', (req,res) => {
    try {
        const { id: taskID } = req.params
        User.findByIdAndUpdate({ _id: taskID },req.body, {
            new: true
        })
            .then(result => {
                console.log(req.body)
                res.send(req.body);
            })
    } catch (error) {
        console.log(error);
    }
})

app.use(routes)
start();