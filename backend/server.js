import express from 'express'
import dotenv from 'dotenv'



// Express app
const app = express();
dotenv.config();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Routes
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Hello")
})

// Listen for response
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})