const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
// cors is used so that browser and server can talk to each other without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

//Setting up port for requests
const port=8081;
app.listen(port, function () {
    console.log(`local host currently running on port: ${port}`)
})

//http://expressjs.com/en/guide/routing.html 

//GET AND POST ROUTES

//Get method route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//POST method route
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
//https://zellwk.com/blog/async-await-express/
app.post('/', async (request, response) => {
    const key=process.env.API_KEY;
    const res = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${request.body.url}`);  
    try {
        const sentimentData = await res.json();
        response.send(sentimentData);
    // use catch for catching and handling an error
    } catch(error) {
        console.log("error", error);
    }
});


