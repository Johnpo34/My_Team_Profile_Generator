// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() - returns 'employee'

// other three extend emplyee

const Employee = require('../lib/employee')

describe("Employee", () => {
  describe("getName", () => {
    it('should return a name', () => {
      const newEmployee = new Employee('John', 1234, 'johnpo34@yahoo.com')
      expect(newEmployee.getName()).toEqual('John')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newEmployee = new Employee('John', 1234, 'johnpo34@yahoo.com')
      expect(newEmployee.getId()).toEqual(1234)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newEmployee = new Employee('John', 1234, 'johnpo34@yahoo.com')
      expect(newEmployee.getEmail()).toEqual('johnpo34@yahoo.com')
    })
  })

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newEmployee = new Employee('John', 1234, 'johnpo34@yahoo.com')
      expect(newEmployee.getRole()).toEqual('Employee')
    })
  });

});