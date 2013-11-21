'use strict';

describe('Service: EmployeeService', function () {

  // load the service's module
  beforeEach(module('braviEmployeesApp'));

  var EmployeeService,
      $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _EmployeeService_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/employees')
      .respond(['Employee1', 'Employee2', 'Employee3']);
    EmployeeService = _EmployeeService_;
  }));

  it('should get list employees', function () {
    var result = EmployeeService.getAll();
    expect(result).toBeDefined();
    result.success(function(employees){ expect(employees.length).toBeGreaterThan(0); });
    $httpBackend.flush();
  });

});
