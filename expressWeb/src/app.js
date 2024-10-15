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
app.get("/register",(req,res)=>{
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
app.get("/py",(req,res)=>{
    res.render("py");
})
app.get("/py_syntax",(req,res)=>{
    res.render("py_syntax");
})
app.get("/py_var",(req,res)=>{
    res.render("py_var");
})
app.get("/py_datatypes",(req,res)=>{
    res.render("py__datatypes");
})
app.get("/js",(req,res)=>{
    res.render("prices_js");
})
app.get("/js_enroll",(req,res)=>{
    res.render("js");
})
app.get("/js_intro",(req,res)=>{
    res.render("js");
})
app.get("/js_syntax",(req,res)=>{
    res.render("js_syntax");
})
app.get("/js_output",(req,res)=>{
    res.render("js_output");
})
app.get("/js_statement",(req,res)=>{
    res.render("js_statement");
})
app.get("/c_prices",(req,res)=>{
    res.render("c_prices");
})
app.get("/c",(req,res)=>{
    res.render("c");
})
app.get("/c_syntax",(req,res)=>{
    res.render("c_syntax");
})
app.get("/c_output",(req,res)=>{
    res.render("c_output");
})
app.get("/c_variables",(req,res)=>{
    res.render("c_variable");
})
app.get("/login",(req,res)=>{
    res.render("login");
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

// Login Check

app.post("/login", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        
        const userEmail = await Register.findOne({email:email})
        // res.send(userEmail.password);
        if(userEmail.password === password){
            res.status(201).render("courses");
        }else{
            res.send("Invalid Login Details");
        }
        console.log(userEmail);
    } catch (error) {
        res.status(400).send("Invalid Login Details")
    }
});

app.listen(port,()=>{
    console.log(`App is runnnig at port ${port}`);
})

