const express = require('express')
const app = express();
const { uuid } = require('uuidv4');

const bcrypt = require("bcrypt");

const cors = require('cors');
app.use(express.json())
app.use(cors())

const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'ecertgenerator'
});

db.connect();

app.get('/', function(req, res){
    res.send(req.body)
})

app.post('/login', async function (req, res) {
    try {
        
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const user = {
            UserID: uuid(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
        };
        console.log(req.body)
        // res.status(200).json(req.body)
        // db.query('INSERT INTO user (UserID, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)', 
        db.query('INSERT INTO user (UserID, firstName, lastName, email, password) VALUES (34, "a", "k", "a1@k.com", "234")',
        // [user.firstName, user.lastName, user.email, user.password],
        (err, result) => {
            if(err){
                res.send(err)
            } 
            res.send(result)
        })


    } catch (error) {
        res.send(error)
    }
})

app.listen(3001, () => {
    console.log('App Listening on port 3001');
})