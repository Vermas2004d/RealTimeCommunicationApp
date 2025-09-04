import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import env from "dotenv";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import db from "./db.js";

const app = express();
const port = 3000;
const saltRounds = 10;

env.config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Register route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (response.rows.length > 0) {
      return res.status(400).send("User already registered");
    }

    const hash = await bcrypt.hash(password, saltRounds);
    await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [
      email,
      hash,
    ]);

    return res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error occurred");
  }
});


//login route
app.post("/login" , async (req , res) => {
    const {email , password} = req.body;

    try{
        const result = await db.query("SELECT * FROM users WHERE email = $1" , [
            email
        ]);

        if(result.rows.length > 0){
            const user = result.rows[0];
            const storedPassword = user.password;

            bcrypt.compare(password , storedPassword , (err , cb) => {
                if(err){
                    res.status(401).send("Error occur while loging.");
                }
                else{
                    if(cb){
                        res.status(200).send('login successfully');
                    }
                    else{
                        res.status(500).send('password not matched');
                    }
                }
            })
        }

        else{
            res.status(500).send("Email not found");
        }
    }

    catch(err){
        res.status(401).send('Error occuring while logging in');
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
