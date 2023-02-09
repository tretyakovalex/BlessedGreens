const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'password',
    database: 'test'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


const loginUser = async (req, res) => {
    const user = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    const values = [user.username];
  
    connection.query(sql, values, async (err, result) => {
      if (err) throw err;
      if(result.length === 0){
        return res.status(401).send({ message: 'Incorrect username or password'});
      }
      const passwordMatch = await bcrypt.compare(user.password, result[0].password);
      if(passwordMatch){
        res.status(200).send({ message: 'Login successful!'});
        const token = jwt.sign({ user }, 'secret_key');
        console.log('Login successful!')
      } else {
        res.status(401).send({ message: 'Incorrect email or password'});
        console.log('Incorrect email or password')
      }
    });
    // res.json({token});
    connection.end();
  };
  
  module.exports = loginUser;