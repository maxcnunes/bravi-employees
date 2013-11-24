'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeCreateCtrl', function ($scope, EmployeeService) {
    $scope.originalModel = {
      name: '',
      birthDate: '',
      githubUsername: '',
      knownTechnologies: ''
    };
    $scope.employee = {};

    $scope.save = function() {
      EmployeeService.create($scope.employee)
        .success(function() {
          console.log('Saved');
        })
        .error(function(ex) {
          console.log('Error: ' + ex);
        });
    };

    $scope.cancel = function() {
      $scope.user = angular.copy($scope.originalModel);
    };

    $scope.cancel();
  });
