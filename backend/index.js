const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']  ,
    credentials: true  
}));


require('./dbCon');
require('dotenv').config();
// Router
const bookRouter = require("./router/bookRouter");
app.use("/api/foods" , bookRouter)


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})