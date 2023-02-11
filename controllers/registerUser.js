// const mysql = require('mysql2');
// const bcrypt = require('bcrypt');

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


// const registerUser = async (req, res) => {
//     const user = req.body;
//     const hashedPassword = await bcrypt.hash(user.password, 10);

//     const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?);';
//     const values = [user.username, user.email, hashedPassword];
  
//     connection.query(sql, values, (err, result) => {
//       if (err) throw err;
//       res.status(200).send({ message: "User successfully registered!"});
//       console.log('User Added');
//     });
  
//     connection.end();
//   };
  
//   module.exports = registerUser;