'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeListCtrl', function ($scope, EmployeeService) {
    EmployeeService.getAll().success(function(employees) {
      $scope.employees = employees;
    });
  });
