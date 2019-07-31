const express = require('express')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const assert = require("assert")
const app = express()
app.use(bodyParser.json())




const mongo_Url = "mongodb://localhost:27017"
const dataBase = "Rabeh"
mongodb.MongoClient.connect(mongo_Url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(err, null, 'connection err')
    const db = client.db(dataBase)
    app.post('/ajoute', (req, res) => {
        let newProduit = req.body
        db.collection("evenement").insertOne(newProduit, (err, data) => {
            if (err) res.send("err")
            else res.send(data)

        })
    })
    ////////////////////
    app.get('/affiche', (req, res) => {
        db.collection("evenement").find().toArray((err, data) => {
            if (err) res.send("err")
            else res.send(data)

        })
    })
    /////////////////////
    app.put('/Modification/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)
        let ModificationProduit = req.body

        db.collection("evenement").findOneAndUpdate({ _id: recherche }, { $set: {...ModificationProduit } }, (err, data) => {
            if (err) res.send(err)
            else res.send(data)

        })
    })
    /////////////////////
    app.delete('/supprimer/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("evenement").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err) res.send(err)
            else res.send(data)

        })
    })
})

app.listen(3001, (err) => {
    if (err) { console.log("server is not running") }
    else { console.log("server is running on port 3001 ") }
})