const express = require('express')
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        nome: req.query.nome
    };
    res.render('home', obj)
});

router.get('/pagina2', (req, res) => {
    fs.readFile('grade.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('pagina2', obj)
    });
});

router.get('/pagina3', (req, res) => {
    fs.readFile('notasHistorico.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('pagina3', obj)
    });
});
module.exports = router;