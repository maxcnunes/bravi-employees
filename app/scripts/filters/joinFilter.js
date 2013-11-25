'use strict';

angular.module('braviEmployeesApp')
  .filter('join', function () {
    return function (array) {
      return array.join(', ');
    };
  });
