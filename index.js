const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected To Database'))

app.use(express.json())

app.listen(3000, () => console.log("Server Running At http://localhost:3000"))