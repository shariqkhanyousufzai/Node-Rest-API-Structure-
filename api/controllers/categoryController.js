'use strict';

var mongoose = require('mongoose'),
Category = mongoose.model('Categories');

exports.list_all_categories = function(req, res) {
    Category.find({}, function(err, category) {
    if (err)
    res.send(err);
    res.json(category);
  });
};



exports.create_a_category = function(req, res) {
  var new_category = new Category(req.body);
  new_category.save(function(err, Category) {
    if (err)
    res.send(err);
    res.json(Category);
  });
};


exports.read_a_category = function(req, res) {
    Category.findById(req.params.categoryId, function(err, Category) {
    if (err)
    res.send(err);
    res.json(Category);
  });
};