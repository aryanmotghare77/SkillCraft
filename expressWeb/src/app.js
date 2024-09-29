const express = require("express");
const path = require("path")
const hbs  = require("hbs")
require("./db/conn")
const Register = require("./models/registers")
const port = process.env.PORT || 3000;
app = express();

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
// app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/courses",(req,res)=>{
    res.render("courses");
})
app.get("/login",(req,res)=>{
    res.render("register");
})
app.get("/registration",(req,res)=>{
    res.render("courses");
})
app.get("/html",(req,res)=>{
    res.render("html");
})
app.get("/html_basics",(req,res)=>{
    res.render("html_basics");
})
app.get("/html_forms",(req,res)=>{
    res.render("html_forms");
})
app.get("/html_table",(req,res)=>{
    res.render("html_table");
})
app.get("/html_div",(req,res)=>{
    res.render("html_div");
})
app.post("/registration", async (req,res)=>{
    try {
        const registerEmployee = new Register({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
            
        })
        
        const registered = await registerEmployee.save();
        res.status(201).render("courses");
    } catch (error) {
        res.status(400).send(error);
    } 
});

app.listen(port,()=>{
    console.log(`App is runnnig at port ${port}`);
})

