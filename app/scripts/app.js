'use strict';

angular.module('braviEmployeesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'toaster'
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
      .when('/employees/create', {
        templateUrl: 'views/employees-create.html',
        controller: 'EmployeeCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
