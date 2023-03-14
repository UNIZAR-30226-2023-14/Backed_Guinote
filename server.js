//CREAREMOS EXPRESS SERVER
const express = require('express')
const userRoutes = require('./src/usuario/routes');

const app = express()
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World!");
});


app.use('/api/v1/usuario', userRoutes);


app.listen(port, () => console.log('app escuchando en el puerto'))