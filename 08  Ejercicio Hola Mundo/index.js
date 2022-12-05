const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

/* app.get('/', (req, res) => {
    res.send('Hello world!')
}) */

/* app.use(express.static('public')); */

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`La aplicacion se está ejecutando en el puerto ${port}`);
})