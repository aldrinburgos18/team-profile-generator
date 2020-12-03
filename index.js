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
        name: 'role',
        message: "Please choose employee's position: ",
        choices: ['Manager', 'Engineer', 'Intern']
    }]
    ).then(employeeinfo => {
        if(employeeinfo.role === 'Manager') {
            //new function for manager prompt goes here
            addManager(employeeinfo);
        } else if (employeeinfo.role === 'Engineer') {
            //new function for engineer prompt goes here
            addEngineer(employeeinfo)
        } else {
            //new function for intern prompt goes here
        }
    })
}

//function to add a manager
function addManager(employeeinfo) {
    inquirer
    .prompt({
        type: 'number',
        name: 'officeNumber',
        message: "Please enter manager's office number: ",
    }).then((employeedata) => {
        let manager = new Manager(employeeinfo.name, employeeinfo.id, employeeinfo.email, employeedata.officeNumber);
        employees.push(manager);
        addEmployee();
        console.log(employees);
    })
};

//asks user if they want to add another employee
function addEmployee(){
    inquirer
    .prompt({
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to add another employee?',
    }).then((add) => {
        if(add.confirmAdd) {
            init();
        } else {
            // call to function to generate HTML
            console.log('NO');
        }
    })

}

//call to initialize the function
init();