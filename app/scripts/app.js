'use strict';

angular.module('braviEmployeesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/employees', {
        templateUrl: 'views/employees-list.html',
        controller: 'EmployeeListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
