'use strict';
module.exports = function(app) {
  var projects = require('../controllers/projectController');

  // todoList Routes
  app.route('/projects')
    .get(projects.list_all_projects)
    .post(projects.create_a_project);


  app.route('/projects/:projectId')
    .get(projects.read_a_project);
};
