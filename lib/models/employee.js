'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var EmployeeSchema = new Schema({
  name: String,
  // superiorEmployee: String,
  birthDate: Date,
  githubUsername: String,
  knownTechnologies: [String],
  // contactInfos: []
});

mongoose.model('Employee', EmployeeSchema);
