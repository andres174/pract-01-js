const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");

/* app.get('/', (req, res) => {
    res.send('Hello world!')
}) */

/* app.use(express.static('public')); */

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(port, () => {
  console.log(`La aplicacion se está ejecutando en el puerto ${port}`);
});

const socket = require("socket.io");

const io = socket(server);

io.on('connection', (socket) => {
    console.log("Nueva conexión");

    socket.on('chat:msg', (data) => {
        io.sockets.emit('chat:msgBack', data)
    })
})
