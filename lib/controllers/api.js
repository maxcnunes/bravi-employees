'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Employee = mongoose.model('Employee'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });

};

/* GET: /api/employees
=================================*/
exports.employees = function(req, res) {
  return Employee.find(function (err, employees) {
    if (!err) {
      return res.json(employees);
    } else {
      return res.send(err);
    }
  });
};