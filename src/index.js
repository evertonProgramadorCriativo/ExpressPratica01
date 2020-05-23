const express = require('express');


const app = express();

app.get('/', (req, resp) => {
    resp.json({message: 'Bem Vindo Ao , Express'});
})

app.listen(3434);