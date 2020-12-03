const Engineer = require("../lib/Engineer");

test('pass github name through a parameter', () => {
    const email = "alec@fakemail.com";
    const id = '3';
    const github = 'ibealec'

    const engineer = new Engineer('Alec', id, email, github);

    expect(engineer.getGithub()).toBe(github);
});

test('pass a role through a parameter', () => {
    const email = "alec@fakemail.com";
    const id = '3';
    const github = 'ibealec'
    const role = 'Engineer'

    const engineer = new Engineer('Alec', id, email, github, role);

    expect(engineer.getRole()).toBe(role);
});