'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));  //Ez már nem kell mert a fetch post-ol

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
});

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
          res.status(200).json(rows[0]); //[0]mert az array-ből az objectet akarom visszakapni
        });
      });
    }
  });
});

app.get('/a/:alias', (req,res) => {
  conn.query('SELECT alias FROM links WHERE alias=?;', [req.params.alias], (err,rows) => {
    if(err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }
    if(rows.length === 1){ //vagyis ha már van ilyen alias...
      conn.query('UPDATE links SET hitCount = hitCount + 1 WHERE alias=?;', [req.params.alias], (err,rows) => {
        if(err) {
          res.status(500).json(err);
          console.log(err);
          return;
        }
        res.redirect('/'); //url-re kéne redirectelni, új select és rows url-jére redirect
      })
    } else {
      res.status(404).json(rows); //(rows)akkor kell ha respondként objecteket kell visszaküldeni nem csak status code-ot
    }
  });
});

app.get('/api/links', (req,res) => {
  conn.query('SELECT id, url, alias, hitCount FROM links;', (err,rows) => {
    if(err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.delete('/api/links/:id', (req,res) => {
  conn.query('SELECT secretCode FROM links WHERE id=?;' [req.params.id], (err,rows) => {
    if(err) {
      res.status(404).json(err); //ha nincs id akkor nem fut le a query. !!ez mindig 500 és lefut csak üres!!
      console.log(err);
      return;
    } else { //ugye itt már létezik
      conn.query('DELETE FROM links WHERE secretCode=?;', [req.body.secretCode.value], (err,rows) => {
        if(err) {
          res.status(403).json(err);
          console.log(err);
          return;
        }
        res.status(204).json(rows);
      })
    }
  })
})


app.listen(3000);