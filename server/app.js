const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const index = (
    fs.readFileSync(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf8')
    .toString()
    .replace(/%REACT_APP_BACKEND_ENDPOINT%/, process.env.REACT_APP_BACKEND_ENDPOINT)
);

app.use(express.static(path.resolve(__dirname, '..', 'build'), {index: null}));
app.get('*', (req, res) => {res.send(index)});

module.exports = app;
