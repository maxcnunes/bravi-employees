'use strict';

angular.module('braviEmployeesApp')
  .controller('EmployeeCreateCtrl', function ($scope, EmployeeService, $http, _, toaster, $location) {
    $scope.tagsQuery = EmployeeService.getHttpPathTagsQuery();
    $scope.employee = {};

    $scope.save = function(event) {
      EmployeeService.create($scope.employee)
        .success(function() {
          toaster.pop('success', '', 'successfully saved');
          $location.path('/employees');
        })
        .error(function(ex) {
          toaster.pop('error', '', 'Error: ' + ex.message);
        });
    };

    $scope.cancel = function() {
      $scope.user = angular.copy($scope.originalModel);
    };

    $scope.cancel();
  });
