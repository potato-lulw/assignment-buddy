import express from 'express'
import dotenv from 'dotenv'



// express app
const app = express();

app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello")
})

// Listen for response
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})