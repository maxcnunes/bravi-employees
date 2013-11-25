'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeCreateCtrl', function ($scope, EmployeeService, $http, _, toaster, $location) {
    $scope.tagsQuery = EmployeeService.getHttpPathTagsQuery();
    $scope.employee = {};

    $scope.save = function(event) {
      EmployeeService.create($scope.employee)
        .success(function() {
          toaster.pop('success', '', 'successfully saved');
          goToEmployees();
        })
        .error(function(ex) {
          toaster.pop('error', '', 'Error: ' + ex.message);
        });
    };

    $scope.cancel = function() {
      goToEmployees();
    };

    var goToEmployees = function() {
      $location.path('/employees');
    };
  });
