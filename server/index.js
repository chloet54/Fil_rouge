const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



//Constantes importantes
const distDir = "../dist/";
const uri = "mongodb+srv://chloe:123@cluster0.lwlq8.mongodb.net/AngelDemons?retryWrites=true&w=majority";
const Livre = require('./model/livres.model');

//Déclaration d'instance et connexion BdD
const app = express();
var promise = mongoose.connect(uri, { useNewUrlParser: true });

promise.then(() => {
    console.log('DB Connected');
    app.listen('3003', () => {
        console.log('server started');
    });
})

//Configuration
app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes

app.post('/api/livres', (req, res) => {
    var newLivre = new Livre(req.body);

    newLivre.save((err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        res.send(obj);
    });
});

app.get('/api/livres', (req, res) => {
    Livre.find({}, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

// Le :id sera autimatiquement transofrmé par l'identifiant envoyé apr la requête xhttp
app.get('/api/livres/:id', (req, res) => {
    // Pour effectuer une recherche on va utiliser le modèle
    // BodyParser permet de conserver l'id dans req.params.id
    Livre.findOne({ _id: req.params.id }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    })
});

app.put('/api/livres/:id', (req, res) => {
    Livre.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    });
});

app.delete('/api/livres/:id', (req, res) => {
    Livre.deleteOne({ _id: req.params.id }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        res.status(204).end();
    });
});