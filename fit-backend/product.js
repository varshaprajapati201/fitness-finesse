const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    email:{
        type:String
    },
  name:{
    type:String,
  },
    category:{
        type:String,
        uppercase: true,
    },
    desc:{
        type:String,
    },

})


const Associate=new mongoose.model("product",productSchema);

module.exports=Associate;