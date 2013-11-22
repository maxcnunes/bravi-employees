'use strict';

describe('Controller: EmployeeListCtrl', function () {

  // load the controller's module
  beforeEach(module('braviEmployeesApp'));

  var EmployeeListCtrl,
      scope,
      EmployeeService;

  // Initialize the controller and a mock dependences
  beforeEach(inject(function (_EmployeeService_, $controller, $rootScope) {
    // dependences
    EmployeeService = _EmployeeService_;
    spyOn(EmployeeService, 'getAll').andReturn(jasmine.createSpyObj('promise',['success']));
    scope = $rootScope.$new();

    // controller
    EmployeeListCtrl = $controller('EmployeeListCtrl', {
      $scope: scope,
      EmployeeService: EmployeeService
    });
  }));

  describe('when load', function () {
    it('should call getAll employees from service', function () {
      expect(EmployeeService.getAll).toHaveBeenCalled();
    });

    it('should attach a list of employees to the scope', function () {
      expect(scope.employees).toBeUndefined();
    });
  });
});
