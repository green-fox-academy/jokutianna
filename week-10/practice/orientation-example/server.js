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

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/homepage.html');
})

app.post('/api/links', (req,res) => {
  let secretcode = Math.floor((Math.random()*10000)+1);
  conn.query('SELECT alias FROM links WHERE alias=?;', [req.body.alias], (err,rows) => { // ha nincs olyan érték akkor üres array-t kapok vissza
    if(err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }
    if (rows.length !== 0){
      res.status(400).json({'error': 'Your alias is already in use!'});
    } else {
      conn.query('INSERT INTO links (url, alias, secretCode) VALUES (?,?,?);', [req.body.url, req.body.alias, secretcode], (err,rows) => {
        if(err) {
          res.status(500).json(err);
          console.log(err);
          return;
        }
        conn.query('SELECT * FROM links WHERE id=(SELECT MAX(id) FROM links);', (err,rows) => {
          if(err) {
            res.status(500).json(err);
            console.log(err);
            return;
          }
          res.status(200).json(rows);
        })
      })
    }
  })
})



app.listen(3000);