// officeNumber
// getRole() -overridden to return 'manager'

const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("getName", () => {
        it('Should return Name', () => {
            const newManager = new Manager('Sam', 1234, 'Sam@gmail.com', 444)
            expect(newManager.getID()).toEqual(1234)
        })
    })
});

describe("getId", () => {
    it("should return objects iD", () => {
        const newManager = new Manager('Sam', 1234, 'Sam@gmail.com', 444)
        expect(newManager.getID()).toEqual(1234)
    })
});

describe("getEmail", () => {
    it("should return email as a string", () => {
        const newManager = new Manager('Sam', 1234, 'Sam@gmail.com', 444)
        expect(newManager.getEmail()).toEqual('Sam@gmail.com')
    })
});

describe("getOfficeNumber", () => {
    it("should return office number value as a number", () => {
        const newManager = new Manager('Sam', 1234, 'Sam@gmail.com', 444)
        expect(newManager.getOfficeNumber()).toEqual(444)
    })
});

describe("getRole", () => {
    it("should return object role as a string", () => {
        const newManager = new Manager('Sam', 1234, 'Sam@gmail.com', 444)
        expect(newManager.getRole()).toEqual('Manager')
    })
});