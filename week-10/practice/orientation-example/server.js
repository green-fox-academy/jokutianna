'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'urlaliaser',
  insecureAuth: 'true'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to mysql');
});




app.listen(3000);