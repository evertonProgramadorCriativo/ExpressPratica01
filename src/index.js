const express = require('express');


const app = express();

app.get('/', (req, resp) => {
    resp.send('Bem Vindo Ao , Express');
})

app.listen(3434);