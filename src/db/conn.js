const mongoose =require("mongoose")

//creating a database
mongoose.connect("mongodb://localhost:27017/chiragdynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull");
}).catch((error)=>{
    console.log(error);
})
