'use strict';

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    async = require('async');

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

/* POST: /api/employees
=================================*/
exports.create = function(req, res) {
  var employee = new Employee(req.body);

  return employee.save(function (err, result) {
    if (!err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};
