'use strict';

angular.module('braviEmployeesApp')
  .service('EmployeeService', function EmployeeService($http) {
    var httpPath = '/api/employees',
    getAll = function(){
      return $http.get(httpPath);
    },
    getById = function(id){
      return $http.get(httpPath + '/' + id);
    },
    create = function(model){
      if (model.knownTechnologies) {
        model.knownTechnologies = model.knownTechnologies.split(',');
      }

      return $http.post(httpPath, model);
    },
    update = function(model){
      return $http.put(httpPath + '/' + model.id, model);
    },
    remove = function(id){
      return $http.delete(httpPath + '/' + id);
    };

    return {
      getAll: getAll,
      getById: getById,
      create: create,
      update: update,
      remove: remove
    };
  });
