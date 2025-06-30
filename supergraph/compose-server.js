const express = require('express');
const fs = require('fs');
const app = express();

const supergraphSdl = fs.readFileSync('./supergraph.graphql', 'utf8');

app.get('/supergraph', (req, res) => {
    res.set('Content-Type', 'application/graphql');
    res.send(supergraphSdl);
});

app.listen(4000, () => {
    console.log('Supergraph server is running at http://localhost:4000/supergraph');
});
