const fs = require("fs").promises;
const fetch = require("node-fetch");
const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/'
const dbName = 'Api_data_base'

let db;
let client = MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true });


async function hello(){
    let readfile = await fs.readFile("country_names.json");
    let readfileParse = JSON.parse(readfile)
    let db =  (await client).db(dbName);

    for(let i = 0; i<readfileParse.length; i++){
        db.collection("country_names").insertOne({name :readfileParse[i]})
        }
    
}
hello()