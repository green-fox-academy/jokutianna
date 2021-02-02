'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json()); //bodyparser
app.use(express.static('public') );
app.use(express.urlencoded({extended: true}));//HTML Form-nál: mert nem json-ben kuldi az adatot a req.bodyban

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: 'true' //so the auth wont be a problem
});

/*conn.connect((err) => {
  if (err) {
    console.log(err.toString);
  }
  console.log('Connected to mysql');
})
*/

app.get('/hello', (req,res) => {
  res.send('Helloka');
})

app.get('/posts', (req,res) => {
  conn.query('SELECT * FROM posts;', (err,rows) => {
    if (err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }
    //res.setHeader('Content-type', 'application/json');
    res.status(200).json(rows);
    //res.redirect('/');
  });
});

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/homepage.html');
})

app.get('/submit', (req,res) => {
  res.sendFile(__dirname + '/public/submit.html');
})

app.post('/posts', (req,res) => {
  console.log(req.body.title);
  conn.query('INSERT INTO posts (title, url) VALUES (?,?);', [req.body.title, req.body.url], (err,rows) => {
    if(err){
      console.log(err.toString());
      res.status(500).json(err);
      return;
    }
    conn.query('SELECT * FROM posts WHERE id=(SELECT MAX(id) FROM posts);', (err,rows) => {
      if(err){
        res.status(500).json(err);
        return;
      }
      res.redirect('/'); //VAGY res.status(200).json(rows);
    })
    console.log('post added');
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ?;`, [req.params.id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id = ?;`, [req.params.id], (err, rows) => {
      if(err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ?;`, [req.params.id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id = ?;`, [req.params.id], (err, rows) => {
      if(err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.get('/delete/:id', (req,res) => { //.delete volt!!
  conn.query(`DELETE FROM posts WHERE id = ?;`, [req.params.id], (err,rows) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    res.redirect('/'); //res.status(200).json(rows);
  });
});

app.listen(3000);