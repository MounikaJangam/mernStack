const express = require('express');
const mongoose = require('mongoose');
const TaskSchema = require('./model');
const cors = require('cors');

const app = express();

app.use(express.json()); 

app.use(cors({
    origin: '*'
}))

mongoose.connect('mongodb+srv://jangammounika:mounika123@cluster0.vfgdnky.mongodb.net/').then(
    ()=> console.log("DB Connected")
)

app.post('/addtask',async(req, res)=>{
    const todo = req.body.todo;
    console.log("req", todo)
    try{
        const newData = new TaskSchema({
            todo : todo
        });
        await newData.save();
        return res.json(await TaskSchema.find())
    }
    catch(err){
        console.log(err)
    }
})

app.get('/gettask',async(req, res)=>{
    try{
        return res.json(await TaskSchema.find());
    } catch(err){
        console.log(err);
    }
})

app.delete('/delete/:id',async(req, res)=>{
    try{
        await TaskSchema.findByIdAndDelete(req.params.id)
        return res.json(await TaskSchema.find())
    }catch(err){
        console.log(err)
    }
})

app.listen(5000,()=> console.log('server is running'));