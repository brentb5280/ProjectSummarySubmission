const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    company: company.value,
    message: message.value,
  
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email Sent');
      name.value = '';
      email.value = '';
      company.value = '';
      message.value = '';
    }else('Something Went Wrong')
  }

  xhr.send(JSON.stringify(formData));

} )



const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')


const app = express();

//view engine 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(dirname, 'public')));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder 
//app.use('/public', express.static(path.join(_dirname, 'public')));

app.get('/', (req,res) =>{
    res.render('Public');
});

app.post('/send', (req, res) =>{
  const output = `
  <p> you have a new submission </p>
  <h3> Submission form</h3>
    <ul>
    <li>Name: ${re.body.name}</li>
    <li>Company: ${re.body.company}</li>
    <li>Email: ${re.body.email}</li>
    <li>Phone: ${re.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 25.587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'brentbowles111@yahoo.com', // generated ethereal user
      pass: 'zaq12wsxXSW@!QAZ', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"nodemailer contact" <brentbowles111@yahoo.com>', // sender address
    to: "bbowles@sileotech.com, brentbowles111@yahoo.com", // list of receivers
    subject: "Node request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

   res.render('contact', {msg:'email has been sent'})

});
//app.listen(3001, () => console.log('server started...'));

//let transporter = nodemailer.createTransport({
        //host: 'smtp.mailtrap.io',
       // port: 2525,
       // auth: {
         //   user: "<user>",
         //   pass: "<pass>"
       // }
//})