const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
const nodemailer = require('nodemailer');

const app = express();

//view engine 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder 
//app.use('/public', express.static(path.join(_dirname, 'public')));

app.get('/', (req,res) =>{
    res.send('Hello');
});

app.listen(3001, () => console.log('server started...'));

//let transporter = nodemailer.createTransport({
        //host: 'smtp.mailtrap.io',
       // port: 2525,
       // auth: {
         //   user: "<user>",
         //   pass: "<pass>"
       // }
//})