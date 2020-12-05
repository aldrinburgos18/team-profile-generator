const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const employees = [];

function addManager() {
    console.log("Hello! Please follow instructions to generate HTML!")
    inquirer
    .prompt(
        [{
            type: 'text',
            name: 'managerName',
            message: "Enter team manager's name: "
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "Enter team manager's e-mail: "
        },
        {
            type: 'text',
            name: 'managerId',
            message: "Enter team manager's ID number: "
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "Enter team manager's office number: "
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
            message: "Enter engineer's name: "
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter engineer's e-mail: "
        },
        {
            type: 'text',
            name: 'id',
            message: "Enter engineer's ID number: "
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
            console.log(employees);
    })
};

function addIntern(pickRole) {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Enter intern's name: "
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter intern's e-mail: "
        },
        {
            type: 'text',
            name: 'id',
            message: "Enter intern's ID number: "
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
            console.log(employees);
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
         //
        }
    })
};

addManager();