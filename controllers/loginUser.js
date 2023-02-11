// const mysql = require('mysql2');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const express = require('express');
// const app = express();

// const session = require('express-session');

// // Initialize session
// app.use(session({
//   secret: "Shh, its a secret!",
//   resave: false,
//   saveUninitialized: true
// }));

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'testuser',
//     password: 'password',
//     database: 'test'
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });


// const loginUser = async (req, res) => {
//     const user = req.body;
//     const sql = 'SELECT * FROM users WHERE username = ?';
//     const values = [user.username];

//     console.log(values);
  
//     connection.query(sql, values, async (err, result) => {
//       if (err) throw err;
//       if(result.length === 0){
//         return res.status(401).send({ message: 'Incorrect username or password'});
//       }
//       const passwordMatch = await bcrypt.compare(user.password, result[0].password);
//       if(passwordMatch){
//         // res.status(200).send({ message: 'Login successful!'});
//         // const token = jwt.sign({ user }, 'secret_key');
//         req.session.user = user;
//         console.log('Login successful!')
//         console.log(user.username);
//       } else {
//         res.status(401).send({ message: 'Incorrect email or password'});
//         console.log('Incorrect email or password')
//       }
//     });
//     // res.json({token});
//     connection.end();
//   };
  
//   module.exports = loginUser;