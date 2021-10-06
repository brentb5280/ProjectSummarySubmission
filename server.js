const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.static('Public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Public/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 25.587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'brentbowles111@yahoo.com', // generated ethereal user
          pass: 'zaq12wsxXSW@!QAZ', // generated ethereal password
        },
      });

      const mailOptions = {
          from: req.body.email,
          to:'brentbowles111@yahoo.com',
          subject: `message from ${req.body.email}: ${req.body.sunject}`,
          text:req.body.message
      }

      transporter.sendMail(mailOptions, (error, info)=>{
          if(error){
              console.log(error);
              res.send('error');
          }else{
              console.log('Email Sent: ' + info.response);
              res.send('success')
          }
      })
})