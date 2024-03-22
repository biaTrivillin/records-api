const express = require('express');
const server = express();
const products = require('./src/data/products.json')

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.get('/', (req,res) => {

    return res.json(products)
})

server.get('/search', (req,res) => {
    const term = req.query.term;
    const filteredRecords = []

    products.forEach((record) => {

        const stringRecords = JSON.stringify(record)

        if (stringRecords.toLowerCase().includes(term.toLowerCase())) {

            filteredRecords.push(record);

        }

    })

    return res.json(filteredRecords)
})


server.get("/findByArtist", (req, res)=>{
    const artist = req.query.artist;
    return res.json(products.filter((record) => record.artist == artist))
})

server.get("/findByGenre", (req, res)=>{
    const genre = req.query.genre;
    return res.json(products.filter((record) => record.genre == genre))
})

server.get("/findByName", (req, res)=>{
    const name = req.query.name;
    return res.json(products.filter((record) => record.name == name))
})

server.get("/findById", (req, res)=>{
    const id = req.query.id;
    return res.json(products.filter((record) => record.id == id))
})

server.get(`/genres`, (req,res) => {

    const genreList = products.map((record) => record.genre)

    return res.json(Array.from(new Set(genreList)))
})

server.get(`/artists`, (req,res) => {

    const artistList = products.map((record) => record.artist)

    return res.json(Array.from(new Set(artistList)))
})

server.get(`/conditions`, (req,res) => {

    const conditionList = products.map((record) => record.condition)

    return res.json(Array.from(new Set(conditionList)))
})

server.listen(3000, () => {
    console.log('Servidor Iniciado!')
})