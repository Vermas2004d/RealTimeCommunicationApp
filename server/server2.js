import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import env from "dotenv";
import passport from "passport";
import {Strategy} from "passport-local";
import session from "express-session";
import db from "./db.js";


  
const app = express();
const port =  3000;
const saltRounds = 10;
  
env.config();


//Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",   // your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.post("/register" , async(req , res) => {
    const {email , password} = req.body;

    try{
        const response = await db.query("SELECT * FROM users WHERE email = $1" , [
            email
        ]);
        if(response.rows.length> 0){
          //add pop up for directly goes to the login page
          //because the user is already regsistered//
          res.status(500);
        }
        else{
          bcrypt.hash(password , saltRounds , async (err  , hash) => {
            if(err){
              res.status(500);
            }
            else{
              const result = await db.query("INSERT INTO users (email , password) VALUES ($1 , $2) *RETURNING" , [
                email , hash
              ]);
              res.status(201);
            }
          })
        }
    }
    catch(err){
        console.log(err);
        res.send("An error occurred").status(500);
    }

});

app.listen(port , () => {
  console.log(`Server is running on the port ${port}`);
});

