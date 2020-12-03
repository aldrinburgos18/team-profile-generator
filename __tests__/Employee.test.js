const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jared');

    expect(typeof(employee)).toBe('object');
});

test('pass a name through a parameter', () => {
    const name = 'Jared'

    const employee = new Employee(name);

    expect(employee.getName()).toBe('Jared');
});

test('pass an id number through a parameter', () => {
    const id = 1;

    const employee = new Employee('Jared', id);

    expect(employee.getId()).toEqual(expect.any(Number));   
});

test('pass an email through a parameter', () => {
    const email = "jared@fakemail.com";
    const id = '1';

    const employee = new Employee('Jared', id, email);

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('pass a role through a parameter', () => {
    const email = "jared@fakemail.com";
    const id = '1';
    const role = 'Employee'
    
    const employee = new Employee('Jared', id, email, role);

    expect(employee.getRole()).toEqual(expect.any(String));
});
