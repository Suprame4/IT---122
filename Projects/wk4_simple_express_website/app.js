// add modules to the app
var express = require('express');
var path = require('path');  // Path is a root module which is why we didn't add it to the dependencies
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// we can initiallize the app here
var app = express();

// setup jade views. This tells jade which folder the template files will be in
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // set the view engine to jade

// set the body parser middle ware
app.use(bodyParser.json());// parse json
app.use(bodyParser.urlencoded({extended:false})); // 
app.use(express.static(path.join(__dirname, 'public')));

// route setup to the home page
app.get('/', function(req, res){
    //console.log('Hello World');
    //res.send('Hello World');
    res.render('index', {title: "Computer Not Working?"});
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact/send', function(req, res){
   //console.log('test')
   var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'lisanetscc@gmail.com',
           pass: ''
       }
   });
   var mailOptions = {
       from: 'David Bell <lisanetscc@gmail.com>',
       to: 'david.bell@seattlecolleges.edu',
       subject: 'Website Submission',
       text: 'You have a submission with the following details... Nam:'+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
       html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
   }
   transporter.sendMail(mailOptions, function(error, info){
       if(error){
           console.log(error);
           res.redirect('/');
       } else {
           console.log('Message Sent: '+info.response);
           res.redirect('/');
       }
   });
});

app.listen(3000);
console.log('Server is running on port 3000')