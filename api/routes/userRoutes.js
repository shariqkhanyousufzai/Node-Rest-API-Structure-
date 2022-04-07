'use strict';

module.exports = function(app) {
var UserAuth = require('../controllers/userController');
var auth = require('../../middlewares/auth');

  // User Routes
  app.route('/register')
    .post(UserAuth.register);


  app.route('/login')
    .post(UserAuth.login);

 
  app.get('/profile', auth.auth, UserAuth.profile);


  app.get('/logout', auth.auth, UserAuth.logout);


};
