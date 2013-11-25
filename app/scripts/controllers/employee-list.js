'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeListCtrl', function ($scope, EmployeeService) {
    /* Config Grid */
    $scope.gridOptions = {
      data: 'employees',
      enableSorting: true,
      filterOptions: {
        filterText: '',
        inputFilterText: ''
      },
      columnDefs: [
        { field: 'name', displayName: 'Name', width: 150 },
        { field: 'birthDate', displayName: 'Birth', cellFilter: 'date: "dd/MM/yyyy"', width: 90 },
        { field: 'githubUsername', displayName: 'Github', width: 100 },
        { field: 'knownTechnologies', displayName: 'Known Technologies', cellFilter: 'join',
          sortable: false, colFilterText: ''
        },
      ]};

    /* Filter by known technologies */
    $scope.$watch('gridOptions.filterOptions.inputFilterText', function(searchText, oldsearchText) {
      if (searchText !== oldsearchText) {
        $scope.gridOptions.filterOptions.filterText = "knownTechnologies:" + searchText + "; ";
      }
    });

    EmployeeService.getAll().success(function(employees) {
      $scope.employees = employees;
    });
  });
