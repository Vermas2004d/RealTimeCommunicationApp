import express from "express";


const app = express();
const port = 3000;



app.get("/" , (req , res) => {
  res.send("You are on the get route");
})

app.listen(port , () => {
  console.log(`Server is running on the port ${port}`);
});