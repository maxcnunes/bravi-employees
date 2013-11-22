'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Employee = mongoose.model('Employee');

//Clear old things, then add things in
Thing.find({}).remove(function() {
	Thing.create({ 
		name : 'HTML5 Boilerplate',
		info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
		awesomeness: 10
	}, {
		name : 'AngularJS',
		info : 'AngularJS is a toolset for building the framework most suited to your application development.',
		awesomeness: 10
	}, {
		name : 'Karma',
		info : 'Spectacular Test Runner for JavaScript.',
		awesomeness: 10
	}, {
		name : 'Express',
		info : 'Flexible and minimalist web application framework for node.js.',
		awesomeness: 10
	}, {
		name : 'MongoDB + Mongoose',
		info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
		awesomeness: 10
	}, function(err) {
			console.log('finished populating things');
		}
	);
});

//Clear old employees, then add employees in
Employee.find({}).remove(function() {
	Employee.create({
		name: 'Max Claus Nunes',
	  birthDate: new Date(1989, 08, 12),
	  githubUsername: 'maxcnunes',
	  knownTecnologies: ['Node', 'Js', 'C#', 'Ruby', 'Rails']
	}, {
		name: 'Mr. Mongo DB',
	  birthDate: new Date(2000, 10, 10),
	  githubUsername: 'mongodb',
	  knownTecnologies: ['Node', 'Js', 'NoSQL']
	}, {
		name: 'Mr. Angular',
	  birthDate: new Date(2010, 10, 10),
	  githubUsername: 'angular',
	  knownTecnologies: ['Node', 'Js']
	}, function(err) {
			console.log('finished populating employees');
		}
	);
});