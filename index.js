const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/generateHTML');

const employees = [];


function addManager() {
    console.log("Hello! Please follow instructions to generate HTML!")
    inquirer
    .prompt(
        [{
            type: 'text',
            name: 'managerName',
            message: "Enter team manager's name: ",
            validate: managerName => {
                const val = /^[a-zA-Z]+$/;
                if (managerName.match(val)) {
                    return true;
                } else {
                    console.log('\n Please enter a valid name.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "Enter team manager's e-mail: ",
            validate: managerEmail => {
                const val = /([a-zA-Z0-9._])+@([a-zA-Z])+(\.[a-zA-Z]+)+/;
                if (managerEmail.match(val)) {
                    return true;
                } else {
                    console.log('\n Please enter a valid e-mail address.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerId',
            message: "Enter team manager's ID number: ",
            validate: managerId => {
                if (isNaN(managerId)){
                    console.log('\n Please input numbers only.')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "Enter team manager's office number: ",
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log('\n Please input numbers only.');
                    return false;
                } else {
                    return true;
                }
            }
        }]
        ).then((data) => {
            let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber, data.role);
            employees.push(manager);
                addEmployee();
        })
};

function addEngineer(pickRole) {
        inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Enter engineer's name: ",
            validate: name => {
                const val = /^[a-zA-Z]+$/;
                if (name.match(val)) {
                    return true;
                } else {
                    console.log('\n Please enter a valid name.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter engineer's e-mail: ",
            validate: email => {
                const val = /([a-zA-Z0-9._])+@([a-zA-Z])+(\.[a-zA-Z]+)+/;
                if (email.match(val)) {
                    return true;
                } else {
                    console.log('\n Please enter a valid e-mail address.')
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "Enter engineer's ID number: ",
            validate: id => {
                if (isNaN(id)) {
                    console.log('Please input numbers only');
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "Enter engineer's GitHub username: ",
            validate: github => {
                if(github) {
                    return true;
                } else {
                    console.log("Please enter engineer's Github username!")
                return false;
                }
            }
        }]).then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github, pickRole.role);
            employees.push(engineer);
            addEmployee();
    })
};

function addIntern(pickRole) {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Enter intern's name: ",
            validate: name => {
                const val = /^[a-zA-Z]+$/;
                if (name.match(val)) {
                    return true;
                } else {
                    console.log('\n Please enter a valid name.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter intern's e-mail: ",
            validate: email => {
                const val = /([a-zA-Z0-9._])+@([a-zA-Z])+(\.[a-zA-Z]+)+/;
                if (email.match(val)) {
                    return true;
                } else {
                    console.log('Please enter a valid e-mail address.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "Enter intern's ID number: ",
            validate: id => {
                if (isNaN(id)) {
                    console.log('Please input numbers only');
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "Enter intern's school name: ",
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log("Please enter intern's school name!")
                return false;
                }
            }
        }]).then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school, pickRole.role);
            employees.push(intern);
            addEmployee();
    })
};

function addEmployee() {
    inquirer
    .prompt({
        type: 'list',
        name: 'role',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'I do not want to add another employee.']
    }).then((pickRole) => {
        if(pickRole.role === 'Engineer'){
            addEngineer(pickRole);
        } else if (pickRole.role === 'Intern') {
            addIntern(pickRole);
        } else {
            generateHTML(employees);
        }
    })
};


addManager();