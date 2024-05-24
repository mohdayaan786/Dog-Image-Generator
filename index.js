import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",async(req,res)=>{
      try{  
        res.render("index.ejs");
      } catch(error){
        console.log(error.data);
        res.status(500);
      }
    
});

app.post("/submit", async(req,res)=>{
  try{
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.render("index.ejs", {
      facts : result.data.message,
});
}catch(error){
console.log(error.data);
res.status(500);
}
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})