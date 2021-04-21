const express = require('express')
const app = express()
const dbConfig = require('./api/config/mongodb.config')
const corsConfig = require('./api/config/cors.config')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI || dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database')
}).catch((error) => {
    console.error('Could not connect to the database. Error : ', error)
    process.exit()
})

app.use(cors(corsConfig));
app.use(express.json());

require('./api/routes/perfanalytics.route')(app);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is listening on port 8000");
})

module.exports = app