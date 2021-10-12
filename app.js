const express = require('express') ;
const app = express(); 

const port = 80 ;

const path = require('path');

app.use('/static', express.static('static'));

const bodyParser = require("body-parser");

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:Kukreja%40123@cluster0.macmj.mongodb.net/contactPixxelHub', {useNewUrlParser:true});

// Schema 
var contactSchema = new mongoose.Schema({
  firstname: String ,
  lastname: String ,
  mobile: String ,
  email: String,
  subject: String,
  message: String
});

var Contact = mongoose.model('Contact', contactSchema);

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.post('/' , (req,res)=>{
  var myData = new Contact(req.body);

  myData.save().then(()=>{
    res.sendFile(__dirname+"/ty.html")
  }).catch(()=>{
    alert("Some error occured , try filling the form again");
  })

})


app.listen(process.env.PORT || port,()=>{
  console.log(`Application is running at port ${port}`);
});