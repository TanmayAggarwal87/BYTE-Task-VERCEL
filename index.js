const express = require("express")
const session = require("express-session")
const passport = require("passport")
const passportSetup= require("./config/passport-setup")
const authRouter = require("./routers/routes")
const app = express()
const path = require("path");


app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));


app.use(session({ 
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true }));
    
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.render("login")
})

app.use("/auth",authRouter)


app.listen(3000,()=>{
    console.log("running on 3000")
})