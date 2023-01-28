//Fazendo importação
const express = require ("express");
const router = require('./routes/index');
const mustache = require('mustache-express');

//Configs basicas do app
const app = express();
app.use('/', router); 

//foi passado 1 rota pois criamos apenas 1
app.use(express.json());

app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app; //exportamos o app, pois vamos importá-lo no servidor