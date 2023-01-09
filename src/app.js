const express = require("express");
//const { expr } = require("jquery");
const path=require("path")
require("./db/conn");
const User = require("./models/usermessage")
const hbs=require("hbs");


const app=express();
const port =process.env.PORT || 3000;

// routing 
// app.get(path,calback)
const staticpath = path.join(__dirname,"../public")
const viewspath = path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialspath);

// middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",viewspath);

app.get("/",(req,res)=>{
    res.render("index");
})



app.post("/contact",async(req,res)=>{
    try{
        //res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(500).send(error);
    }
})

//server create
app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})