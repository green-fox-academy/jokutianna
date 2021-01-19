'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
  insecureAuth: 'true'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql')
});

app.get('/booktitles', (req,res) => {
  conn.query('SELECT * FROM bookstore', (err,rows) => {
    console.log(rows);
    if (err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows);
  });
  console.log(rows)
})

app.listen(3000);