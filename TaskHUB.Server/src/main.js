import express from 'express'
import dotenv from 'dotenv'
import { createUser, getAllUser, initUserTable } from './models/userModel.js';
dotenv.config();

const PORT = process.env.PORT;


const app = express();
app.use(express.json());


initUserTable().then(()=>{console.log("user Table is created");
})

app.post('/user',async(req,res)=>{
   const {name,email} = req.body;

   try {
    const result =await createUser(name,email);
    res.send(result);
   } catch (error) {
    console.log(error);
   }
})

app.get('/user',async(req,res)=>{
    try {
        const result = await getAllUser();
        res.send(result);
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(PORT,
    ()=>console.log(`Server running on PORT:${PORT}`)
)