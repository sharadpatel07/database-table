const express = require("express");
const app = express();
const port  = 1818;
const User = require("./model/user");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/newTodolist")
.then(()=>{
    console.log("connect")
})
.catch((error)=>{
    console.log(error)
})
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.post('/resister' , async(req,res)=>{
    console.log(req.body);
    const user = await User(req.body);
    user.save();

})
 app.get('/api/user' , async(req,res)=>{
    const user = await User.find({})
    res.send(user);
 })

   
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})