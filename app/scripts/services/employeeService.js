'use strict';

angular.module('braviEmployeesApp')
  .service('EmployeeService', function EmployeeService($http) {
    var getAll = function(){
      return $http.get('/api/employees');
    };

    return {
      getAll : getAll
    };
  });
