const Manager = require("../lib/Manager");

test('pass office number through a parameter', () => {
    const email = "jared@fakemail.com";
    const id = '1';
    officeNumber = 13;
    
    const manager = new Manager('Jared', id, email, officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('pass a role through a parameter', () => {
    const id = '1';
    const email = "jared@fakemail.com";
    const officeNumber ='13'    
    const role = 'Manager'
    
    const manager = new Manager('Jared', id, email, officeNumber, role);

    expect(manager.getRole()).toEqual(expect.any(String));
});