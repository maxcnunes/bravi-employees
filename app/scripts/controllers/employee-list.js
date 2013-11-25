'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeListCtrl', function ($scope, EmployeeService) {
    $scope.employees = [];
    $scope.gridOptions = {
      data: 'employees',
      columnDefs: [
        { field: 'name', displayName: 'Name', width: 150 },
        { field: 'birthDate', displayName: 'Birth', cellFilter: 'date: "dd/MM/yyyy"', width: 90 },
        { field: 'githubUsername', displayName: 'Github', width: 100 },
        { field: 'knownTechnologies', displayName: 'Known Technologies', cellFilter: 'join', sortable: false },
      ]};

    EmployeeService.getAll().success(function(employees) {
      $scope.employees = employees;
    });
  });
