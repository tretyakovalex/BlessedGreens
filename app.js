const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { json } = require('body-parser');

const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');

const PORT = 8080;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const userRouter = require('./routes/userRouter');
app.use('/', userRouter);

// app.post('/api/signup', async (req, res) => {
//     const user = req.body[0];
      
//     const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?);';
//     const values = [user.username, user.email, user.password];

//     connection.query(sql, values, (err, result) => {
//         if (err) throw err;
            
//         console.log('User Added');
//     })
        
//     connection.end();
// });    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custome-Header, Authorization');
    if(req.method === 'OPTIONS'){
        return res.status(200).end();
    }
    next();
});

app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.use(express.static(path.join(__dirname, './BlessedGreens/dist/blessed-greens')))

app.listen(PORT, () => {
    console.log(`Server listening on localhost://${PORT}`);
});