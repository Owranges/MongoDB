const fs = require("fs").promises;
const fetch = require("node-fetch");
const { readFile } = require("promise-fs");
const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/'
let db;
let client = MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true });

async function hi(){
    let db =  (await client).db("Api_data_base");
    let dbcollectiona = await db.collection("country_names").find().toArray();
    for(let y = 0; y<dbcollectiona.length; y++){
        let test = dbcollectiona[y].name;
        let addData = await fetch("https://restcountries.eu/rest/v2/name/" + test);
        let jsonData = await addData.json()
        db.collection("country_full_data").insertOne(jsonData[0])
    }
}
hi()