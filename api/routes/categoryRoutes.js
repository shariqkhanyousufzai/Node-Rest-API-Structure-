'use strict';
module.exports = function(app) {
  var category = require('../controllers/categoryController');

  // todoList Routes
  app.route('/category')
    .get(category.list_all_categories)
    .post(category.create_a_category);


  app.route('/category/:categoryId')
    .get(category.read_a_category);
};
