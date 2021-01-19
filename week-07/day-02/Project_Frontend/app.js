'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.use(express.static('assets'));

app.listen(3000);