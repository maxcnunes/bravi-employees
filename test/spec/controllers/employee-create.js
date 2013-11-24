'use strict';

describe('Controller: EmployeeCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('braviEmployeesApp'));

  var EmployeeCreateCtrl,
      scope,
      EmployeeService,
      $httpBackend;

  // Initialize the controller and a mock dependences
  beforeEach(inject(function (_EmployeeService_, $controller, $rootScope, _$httpBackend_) {
    // dependences
    EmployeeService = _EmployeeService_;
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();

    // controller
    EmployeeCreateCtrl = $controller('EmployeeCreateCtrl', {
      $scope: scope,
      EmployeeService: EmployeeService
    });
  }));

  describe('when load', function () {
    it('should have the employee model blank', function () {
      expect(scope.employee.name).toBeUndefined();
      expect(scope.employee.birthDate).toBeUndefined();
      expect(scope.employee.githubUsername).toBeUndefined();
      expect(scope.employee.knownTechnologies).toBeUndefined();
    });
  });

  describe('when save', function () {
    it('should call create employee from service', function () {
      spyOn(EmployeeService, 'create').andCallThrough();
      $httpBackend.expectPOST('/api/employees').respond();
      scope.save();
      expect(EmployeeService.create).toHaveBeenCalled();
      $httpBackend.flush();
    });
  });
});
