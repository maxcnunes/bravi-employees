'use strict';

describe('Service: EmployeeService', function () {

  // load the service's module
  beforeEach(module('braviEmployeesApp'));

  var EmployeeService,
      $httpBackend,
      fakeEmployee;

  beforeEach(inject(function (_$httpBackend_, _EmployeeService_) {
    $httpBackend = _$httpBackend_;
    EmployeeService = _EmployeeService_;
    fakeEmployee = { id: 1 };
  }));

  afterEach(function() {
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get list employees', function () {
    $httpBackend.expectGET('/api/employees').respond(['Employee1', 'Employee2', 'Employee3']);

    var result = EmployeeService.getAll();
    expect(result).toBeDefined();
    result.success(function(employees){ expect(employees.length).toBeGreaterThan(0); });
  });


  it('should get employee by id', function () {
    $httpBackend.expectGET('/api/employees/'+fakeEmployee.id).respond(fakeEmployee);

    var result = EmployeeService.getById(fakeEmployee.id);
    expect(result).toBeDefined();
    result.success(function(employee){ expect(employee).toBe(fakeEmployee); });
  });


  it('should create employee', function () {
    $httpBackend.expectPOST('/api/employees', fakeEmployee).respond(201, '');

    var result = EmployeeService.create(fakeEmployee);

    expect(result).toBeDefined();
    result.success(function(res,sts){ expect(sts).toBe(201); });
  });


  it('should update employee', function () {
    $httpBackend.expectPUT('/api/employees/'+fakeEmployee.id, fakeEmployee).respond(200, '');

    var result = EmployeeService.update(fakeEmployee);

    expect(result).toBeDefined();
    result.success(function(res,sts){ expect(sts).toBe(200); });
  });


  it('should remove employee', function () {
    $httpBackend.expectDELETE('/api/employees/'+fakeEmployee.id).respond(200, '');

    var result = EmployeeService.remove(fakeEmployee.id);

    expect(result).toBeDefined();
    result.success(function(res,sts){ expect(sts).toBe(200); });
  });

});
