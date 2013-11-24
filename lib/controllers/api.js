'use strict';

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    async = require('async'),
    _ = require('underscore');

/* GET: /api/employees
=================================*/
exports.employees = function(req, res) {
  return Employee.find(function (err, employees) {
    if (!err) {
      return res.json(employees);
    } else {
      return res.status(500).send(err);
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
      return res.status(500).send(err);
    }
  });
};


/* GET: /api/employees/tags
=================================*/
exports.tags = function(req, res) {
  var tag = req.query.tag;

  return Employee.findByKnownTech(tag, function (err, result) {
    if (!err) {
        return res.json(result);
      } else {
        return res.status(500).send(err);
      }
  });
};

