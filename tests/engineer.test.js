// github username
// getGithub()
// getRole() - overridden to return 'manager'

const Engineer = require('../lib/engineer');

describe("Engineer", () => {
  describe("getName", () => {
    it('should return the name of the created object', () => {
      const newEngineer = new Engineer('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')

      expect(newEngineer.getName()).toEqual('Kyle')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newEngineer = new Engineer('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')

      expect(newEngineer.getId()).toEqual(1234)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newEngineer = new Engineer('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')

      expect(newEngineer.getEmail()).toEqual('kyle@gmail.com')
    })
  });

  describe("getGithub", () => {
    it("should return the object's github value as a string", () => {
      const newEngineer = new Engineer('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')

      expect(newEngineer.getGithub()).toEqual('kyleGit')
    }
    )
  });

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newEngineer = new Engineer('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')

      expect(newEngineer.getRole()).toEqual('Engineer')
    })
  });
});