var express     = require('express');
var app         = express();
var morgan      = require('morgan');
const mongoose  = require('mongoose');
var bodyParser  = require('body-parser');
var appRoutes   = require('./svr/routes/api')(router);
var router      = express.Router();
var port        = process.env.PORT||8080;
var cstr        =  'mongodb://localhost:27017/frontage';

app.use(morgan('dev'));
app.use(bodyParser.json());   // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded
app.use('/api', appRoutes);

mongoose.connect(cstr, function(err){
  if (err) {
    console.log('Not connected to the db ' + err);
  } else {
    console.log('Successfully connected to MongoDB.');
  }
});


app.listen(port, function(){
  console.log("Running the server on port " + port)
})
