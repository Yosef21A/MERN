const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const Jokes = require("./routes/joke.routes");
Jokes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );