const express = require('express')
const app = express();
const { v4 } = require('uuid');

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

app.get('/', function (req, res) {
    res.send(req.body)
})

app.post('/register', async function (req, res) {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const user = {
            UserID: v4(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPass,
        };
        console.log(req.body)
        // res.status(200).json(req.body)
        // db.query('INSERT INTO user (UserID, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)', 
        db.query('INSERT INTO user (UserID, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)',
            [user.UserID, user.firstname, user.lastname, user.email, user.password],
            (err, result, fields) => {
                if (err) {
                    res.send(err)
                }
                res.json(user.UserID)
            })


    } catch (error) {
        res.send(error)
    }
})

app.post('/login', async (req, res) => {
    try {
        db.query(
            'SELECT * FROM `user` WHERE `email` = ?',
            [req.body.email],
            async (err, result, fields) => {
                if (err) {
                    res.send(err)
                }

                const passwordCompare = await bcrypt.compare(req.body.password, result[0].password);

                if (!passwordCompare) {

                    res.status(400).json({ p, passwordCompare });

                } else {

                    const data = {
                        user: {
                            id: result[0].userid
                        }
                    }

                    res.status(200).send(data)
                }
            })
    } catch (error) {

        res.status(400).send(error)
        
    }
})

app.get('/:id', async(req, res) => {
    try {
        db.query('SELECT * FROM `user` WHERE `userid` = ?',
        [req.params.id],
        async(err, result, fields) => {
            if (err) {
                res.status(400).json(err)
            }
            res.status(200).json(result)
        }
        )
    } catch (error) {
        res.send(400).json(error)
    }
})

app.get('/generate', async(req,res) => {
    if(req.get('creatorid')){
        db.query('SELECT * FROM `user` WHERE `userid` = ?',
        [req.get('creatorid')],
        async(err, result, fields) => {
            if (err) {
                res.status(400).json('You Are Not A Verified Creator, Kindly Register.')
            }
            const certificate = {
                certificateid: v4(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                certificatetype: req.body.certificatetype,
                doc: new Date(),
                contact: req.body.contact,
                address: req.body.address,
                creatorid: req.get('creatorid')
            }
            db.query('INSERT INTO certificates (firstname, certificateid, contact, address, lastName, doc, certificatetype, creatorid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [ certificate.firstname, certificate.certificateid, certificate.contact, certificate.address, certificate.lastname, certificate.doc, certificate.certificatetype,certificate.creatorid],
            (err, result, fields) => {
                if (err) {
                    res.send(err)
                }
                res.json(certificate.certificateid)
            })
        }
        )
    } else {
        res.status(400).json('You Must Be A Verified Creator To Generate Certificates')
    }
})

app.listen(3001, () => {
    console.log('App Listening on port 3001');
})