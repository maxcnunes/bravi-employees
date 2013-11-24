'use strict';

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee');

//Clear old employees, then add employees in
Employee.find({}).remove(function() {
  Employee.create({
    name: 'Max Claus Nunes',
    birthDate: new Date(1989, 08, 12),
    githubUsername: 'maxcnunes',
    knownTechnologies: ['Node', 'Js', 'C#', 'Ruby', 'Rails']
  }, {
    name: 'Mr. Mongo DB',
    birthDate: new Date(2000, 10, 10),
    githubUsername: 'mongodb',
    knownTechnologies: ['Node', 'Js', 'NoSQL']
  }, {
    name: 'Mr. Angular',
    birthDate: new Date(2010, 10, 10),
    githubUsername: 'angular',
    knownTechnologies: ['Node', 'Js']
  }, function(err) {
    console.log('finished populating employees');
  }
  );
});
