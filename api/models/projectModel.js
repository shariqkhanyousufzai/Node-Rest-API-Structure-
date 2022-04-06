'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Projects', ProjectSchema);