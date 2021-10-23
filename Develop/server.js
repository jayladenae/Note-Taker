const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data??
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use('/api', api);

app.use(express.static('public'));

// get route for homepage
app.get('/', (req, res) => {
    console.log('index route');
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    console.log('notes route');
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.listen(PORT,  () => {
    console.log(`Note Taker app is listening at http://localhost:${PORT} 🚀`)
    });

    