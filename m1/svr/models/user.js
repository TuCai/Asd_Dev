var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    "name": {type:String, uniq:true,require:true},
    "password": {type:String,require:true},
    "email": {type:String, uniq: true, require: true }
  });
