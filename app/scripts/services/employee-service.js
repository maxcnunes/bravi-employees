'use strict';

angular.module('braviEmployeesApp')
  .service('EmployeeService', function EmployeeService($http) {
    var httpPath = '/api/employees',
    getHttpPathTagsQuery = function(){
     return httpPath + '/tags?tag=%QUERY';
    },
    getAll = function(){
      return $http.get(httpPath);
    },
    getById = function(id){
      return $http.get(httpPath + '/' + id);
    },
    create = function(model){
      return $http.post(httpPath, model);
    },
    update = function(model){
      return $http.put(httpPath + '/' + model.id, model);
    },
    remove = function(id){
      return $http.delete(httpPath + '/' + id);
    };

    return {
      getHttpPathTagsQuery: getHttpPathTagsQuery,
      getAll: getAll,
      getById: getById,
      create: create,
      update: update,
      remove: remove
    };
  });
