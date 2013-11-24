'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeCreateCtrl', function ($scope, EmployeeService, $http, _) {
    $scope.tagsQuery = EmployeeService.getHttpPathTagsQuery();
    $scope.employee = {};

    $scope.save = function(event) {
      EmployeeService.create($scope.employee)
        .success(function() {
          console.log('Saved');
        })
        .error(function(ex) {
          console.log('Error: ' + ex.message);
        });
    };

    $scope.cancel = function() {
      $scope.user = angular.copy($scope.originalModel);
    };

    $scope.cancel();
  });
