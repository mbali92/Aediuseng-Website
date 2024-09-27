import express from 'express';
import { getHomepage, updateContent,updateTitle } from './database.js';
import cors from 'cors';
const app = express();

//enable json bod parse and cors for different routes 
app.use(cors())
app.use(express.json())

app.get("/home",async(req,res)=>{
    const homeData = await getHomepage();
    res.send(homeData);
})


app.put("/updateContent/:subsection_id", async(req,res)=>{
    const {subsection_id }= req.params;
    const {subsection_content,contentType} = req.body;
    
    let updateResults;

    if(contentType == 'text'){
      updateResults = await updateContent(subsection_id,subsection_content)
    }
    else{updateResults = await updateTitle(subsection_id,subsection_content)}
    
    if(updateResults == 'success'){
      res.status(200).send("content saved")
      return;
    }
    res.status(500).send(updateResults)
})

app.use(cors({
    origin: ['http://localhost:5173'], 
    methods: ['GET', 'POST','PUT'],
  }));

app.listen(5000,()=>{
    console.log("server listening on port 5000")
})