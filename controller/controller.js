let express = require('express');
let model = require('../models/coins');

const insertCoin = async function(req, res) {
    let coin = req.body;
    return model.insertCoin(coin);
}

const getAllCoins = async function(req, res) {
    return model.getAllCoins();
}

module.exports = {insertCoin, getAllCoins}