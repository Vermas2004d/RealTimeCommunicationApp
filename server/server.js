import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",   // your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.get("/" , (req , res) => {
  res.send("I am on the root page");
});






app.listen(port , () => {
  console.log(`Server is running on the port ${port}`);
});