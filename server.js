const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


const fs = require('fs');


app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.listen(port,() => {
    console.log('Example app listening at http://localhost:${port}')
});

 