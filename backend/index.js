import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

app.get('/', async(req,res) => {
    res.send("Hello Guys")
})

app.post('/api/generate', async(req, res) => {
    const {prompt, n} = req.body;
    if(prompt == ""){
        return res.status(400).json({error: "Prompt cannot be empty"});
    }

    if(prompt.length <= 10){
        return res.status(400).json({error: "Prompt needs to be longer than 10 characters"})
    }

    if(n<=0 || n>4){
        return res.status(400).json({error: "Please enter a number between 0-4"});
    }

    const response = await openai.images.generate({
			model: "dall-e-2",
			prompt: `${prompt} ,realistic ,8k, high definition, vibrant`,
			n: n,
			size: "512x512",
		});

    res.status(200).json({images: response.data});
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})