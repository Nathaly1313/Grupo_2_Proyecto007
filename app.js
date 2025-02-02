const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
    console.log("Folder Path = " + publicPath);
});