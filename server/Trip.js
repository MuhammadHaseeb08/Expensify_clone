const mongoose=require("mongoose")
const expenseSchema = new mongoose.Schema({
    desc: String,
    amount: Number,
    cat: String,
    userId:String
    
  });

  const TripSchema= new mongoose.Schema({
    userId:String,
    country:String,
    city:String,
    expenses:[expenseSchema]

  })

  const Trip = new mongoose.model("Trip", TripSchema);
  module.exports=Trip