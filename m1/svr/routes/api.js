var User = require('../models/user');

model.exports = {
  app.use('/users', function(req, res){
    var user = User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    var rec_ok = req.body.username == null || req.bodyu.username == '' ||
                 req.body.password == null || req.body.password == '' ||
                 req.body.email == null || req.body.email == '';
    if (rec_ok) {
      res.send("Ensure username, email and password were provided.")
    } else {
      user.save(function(err){
        if (err) {
          res.send('Username or email already exists');
        } else {
          res.send('user created.')
        }
      })
    }
    res.send("User is created.");
  })
}
