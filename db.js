const mongoose = require('mongoose');
const config = require('./helpers/configWithDefaults');

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost:${config.database.port}/${config.database.databaseName}`, {
  useMongoClient: true
});

const db = mongoose.connection;

db.on('error', () => {
  console.error('MongoDB connection error');
  process.exit(1);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

module.exports = mongoose;
