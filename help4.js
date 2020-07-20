const fs = require("fs").promises;
const fetch = require("node-fetch");
const { readFile } = require("promise-fs");
const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/'
let db;
let client = MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true });

async function region(){
    let db =  (await client).db("Api_data_base");
    let dbcollectiona = await db.collection("country_full_data").find({region : "Europe"}).toArray();
    
    for( let i = 0; i<dbcollectiona.length; i++ ){
        console.log(dbcollectiona[i])
        await db.collection("Europe").insertOne(dbcollectiona[i])
    }

   dbcollectiona = await db.collection("country_full_data").find({region : "Asia"}).toArray();
    
    for( let i = 0; i<dbcollectiona.length; i++ ){
        await db.collection("Asia").insertOne(dbcollectiona[i])
    }

    dbcollectiona = await db.collection("country_full_data").find({region : "Africa"}).toArray();
    
    for( let i = 0; i<dbcollectiona.length; i++ ){
        await db.collection("Africa").insertOne(dbcollectiona[i])
    }
    dbcollectiona = await db.collection("country_full_data").find({region : "Oceania"}).toArray();
    
    for( let i = 0; i<dbcollectiona.length; i++ ){
        await db.collection("Oceania").insertOne(dbcollectiona[i])
    }
    dbcollectiona = await db.collection("country_full_data").find({region : "Polar"}).toArray();
    console.log(dbcollectiona)
    for( let i = 0; i<dbcollectiona.length; i++ ){
        await db.collection("Polar").insertOne(dbcollectiona[i])
    }
    
    

 

    dbcollectiona = await db.collection("country_full_data").find({subregion : "South America" }).toArray();
    console.log(dbcollectiona)
    for(let i = 0; i<dbcollectiona.length; i++){
        await db.collection("South America").insertOne(dbcollectiona[i])
        console.log(dbcollectiona[i])
    }

    dbcollectiona = await db.collection("country_full_data").find({subregion : "Northern America" }).toArray();
    console.log(dbcollectiona)
    for(let i = 0; i<dbcollectiona.length; i++){
        await db.collection("Northern America").insertOne(dbcollectiona[i])
        console.log(dbcollectiona[i])
    }

    dbcollectiona = await db.collection("country_full_data").find({subregion : "Central America" }).toArray();
    console.log(dbcollectiona)
    for(let i = 0; i<dbcollectiona.length; i++){
        await db.collection("Central America").insertOne(dbcollectiona[i])
        console.log(dbcollectiona[i])
    }

    dbcollectiona = await db.collection("country_full_data").find({subregion : "Carribean" }).toArray();
    console.log(dbcollectiona)
    for(let i = 0; i<dbcollectiona.length; i++){
        await db.collection("Carribean").insertOne(dbcollectiona[i])
        console.log(dbcollectiona[i])
    }

}
region()