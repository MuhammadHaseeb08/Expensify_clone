 const express = require("express");
const connect= require("./coonectDb")
const app = express();
const cors = require('cors');
app.use(cors());
const User= require("./User")
const Trip= require("./Trip")
const serverAddress = '192.168.0.100:4000'
app.use(express.json());
app.listen(4000, () => {
  console.log("sener is listening");
});
connect()
app.post("/signUp",async(req,res)=>{
    console.log(req.body.data);
    let nya= new User(req.body.data)
   await  nya.save()
    res.json({
        success:true
    })
})
app.post("/login",async(req,res)=>{
    let founded= await  User.find({$and:[{email:req.body.data.email},{password:req.body.data.password}]})
    // console.log(founded[0]._doc);
    if (founded.length>0) {
        let user= founded[0]._doc
        res.json({
            success:true,user

        })
    }else{
        res.json({
            success:false
        })
    }
    
})

app.post("/addTrip",async(req,res)=>{
        let nya= new Trip(req.body.trip)
        let founded= await nya.save()
        console.log(founded);
        if (founded) {
            res.json({
                success:true
            })
        }else{
            res.json({
                success:false
            })
        }


})

app.get("/trips",async(req,res)=>{
    let founded= await Trip.find()
    // console.log(req.body);
    if (founded) {
        res.json({
            success:true,
            founded
        })
        
    } else {
        res.json({
            success:false
        })
    }
})
app.post("/addExpense",async(req,res)=>{

    let founded= await Trip.findByIdAndUpdate(req.body.id,{$push:{expenses:req.body.expense}})
    // console.log(founded);
    res.json({
        success:true
    })
})