const express = require('express');
const server = express();
const products = require('./src/data/products.json');

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.get('/', (req,res) => {

    return res.json(products);
});

server.get('/search', (req,res) => {
    const q = req.query.q;
    const filteredRecords = [];

    products.forEach((record) => {

        const stringRecords = JSON.stringify(record);

        if (stringRecords.toLowerCase().includes(q.toLowerCase())) {

            filteredRecords.push(record);

        }

    });

    return res.json(filteredRecords);
});

server.get("/filter", (req, res) => {
    const genre = req.query.genre;
    const artist = req.query.artist;
    const maxPrice = req.query.maxprice;
    const condition = req.query.condition;

    const fieldsArray = [ {q: genre, n: "genre"}, {q: artist, n: "artist"}, {q: condition, n: "condition"}];

    const filteredFields = fieldsArray.filter((item) => item.q != undefined); //retirar letras maiusculas
    
    const filteredRecords = products.filter((record) => filteredFields.every((field) => record[field.n].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === field.q ));

    return res.json(maxPrice != undefined ? filteredRecords.filter((record) => record.price_usd <= maxPrice) : filteredRecords);

});

server.get("/findByName", (req, res) => {
    const name = req.query.name;
    return res.json(products.filter((record) => record.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == name));
});

server.get("/findById", (req, res) => {
    const id = req.query.id;
    return res.json(products.filter((record) => record.id == id));
});

server.get(`/genres`, (req,res) => {

    const genreList = products.map((record) => record.genre);

    return res.json(Array.from(new Set(genreList)));
});

server.get(`/artists`, (req,res) => {

    const artistList = products.map((record) => record.artist);

    return res.json(Array.from(new Set(artistList)));
});

server.get(`/conditions`, (req,res) => {

    const conditionList = products.map((record) => record.condition);

    return res.json(Array.from(new Set(conditionList)));
});

server.listen(3000, () => {
    console.log('Servidor Inicializado!');
});