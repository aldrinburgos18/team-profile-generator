const Intern = require("../lib/Intern");

test('pass school name through a parameter', () => {
    const email = "john@fakemail.com";
    const id = '4';
    const school = '2University'

    const intern = new Intern('Alec', id, email, school);

    expect(intern.getSchool()).toBe(school);
});

test('pass a role through a parameter', () => {
    const email = "alec@fakemail.com";
    const id = '3';
    const school = '2University'
    const role = 'Intern'

    const intern = new Intern('Alec', id, email, school, role);

    expect(intern.getRole()).toBe(role);
});