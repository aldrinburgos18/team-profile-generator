const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const employees = [];
const Manager = require('./lib/Manager');

function init() {
    inquirer
    .prompt(
    [{
        type: 'text',
        name: 'name',
        message: "Please enter employee's name: "
    },
    {
        type: 'text',
        name: 'id',
        message: "Please enter employee's ID number: "
    },
    {
        type: 'text',
        name: 'email',
        message: "Please enter employee's e-mail address: "
    },
    {
        type: 'list',
        name: 'position',
        message: 'Please choose employee role: ',
        choices: ['Manager', 'Engineer', 'Intern']
    }]
    ).then(info => {
        if(info.position === 'Manager') {
            //new function for manager prompt goes here
            addManager(info);
        } else if (info.position === 'Engineer') {
            //new function for engineer prompt goes here
        } else {
            //new function for intern prompt goes here
        }
    })
}

function addManager(info) {
    inquirer
    .prompt({
        type: 'number',
        name: 'officeNumber',
        message: "Please enter manager's office number: ",
    }).then( () => {
        let manager = new Manager(info);
        employees.push(manager);
        console.log(employees);
    })
};

init();