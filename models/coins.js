let client = require('../dbConnection');
let collection = client.db().collection('Coins');

async function insertCoin(coin){
    return collection.insertOne(coin);
}

async function getAllCoins(){
    return collection.find().toArray();
}

module.exports = {insertCoin, getAllCoins}