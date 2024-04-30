let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = require('./routes/routes');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/coins', router);

//app.get('/', (req, res) => {
//    res.render('index.html');
//});

//app.post('/api/coin', async (req, res) => {
//    let coin = req.body;
//    let result = await postCoin(coin);
//    client.close();
//    res.json({statusCode: 200, message: 'success', data: result});
//});

//async function postCoin(coin) {
//    await client.connect();
//    let collection = await client.db().collection('Coins');
//    return collection.insertOne(coin);
//}

//app.get('/api/coins', async (req, res) => {
//    let result = await getAllCoins();
//    client.close();
//    res.json({statusCode: 200, message: 'success', data: result});
//});

//async function getAllCoins() {
//    await client.connect();
//    let collection = await client.db().collection('Coins');
//    return collection.find().toArray();
//}

app.listen(port, () => {
    console.log('server started');
});
