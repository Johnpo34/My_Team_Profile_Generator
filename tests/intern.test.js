// school
// getSchool()
// getRole()overrridden to return 'Intern'

const Intern = require('../lib/intern');

describe("Intern", () => {
  describe("getName", () => {
    it('should return a name', () => {
      const newIntern = new Intern('Alec', 1234, 'alec@gmail.com', 'Bryn Athyn')
      expect(newIntern.getName()).toEqual('Alec')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newIntern = new Intern('Alec', 1234, 'alec@gmail.com', 'Bryn Athyn')
      expect(newIntern.getId()).toEqual(1234)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newIntern = new Intern('Alec', 1234, 'alec@gmail.com', 'Bryn Athyn')
      expect(newIntern.getEmail()).toEqual('alec@gmail.com')
    })
  });

  describe("getSchool", () => {
    it("should return the object's School value as a string", () => {
      const newIntern = new Intern('Alec', 1234, 'alec@gmail.com', 'Bryn Athyn')
      expect(newIntern.getSchool()).toEqual('Bryn Athyn')
    })
  })

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newIntern = new Intern('Alec', 1234, 'alec@gmail.com', 'Bryn Athyn')
      expect(newIntern.getRole()).toEqual('Intern')
    })
  });
});