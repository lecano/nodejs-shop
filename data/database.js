const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongoURL = 'mongo://localhost:27017';
if (process.env.MONGO_URL) {
    mongoURL = process.env.MONGO_URL;
}

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect(mongoURL);
    database = client.db('online-shop')
}

function getDb() {
    if (!database) {
        throw new Error('You must connect first.');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}