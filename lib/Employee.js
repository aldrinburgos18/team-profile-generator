const inquirer = require('inquirer');

function EmployeeList() {
    this.employees = [];
}

class Employee {
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
    }

    getName() {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "Please enter employee's name: "
        }).then(name => {
            /* this.name = name; */
            this.getId(name)
        })
    }

    getId(name) {
        inquirer
        .prompt({
            type: 'text',
            name: 'id',
            message: "Please enter employee's ID number: "
        }).then(id => {
            this.id = id;
            this.getEmail();
        })
    }

    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "Please enter employee's e-mail address: "
        }).then(email => {
            this.email = email;
        })
    }
};

new Employee().getName();
module.exports = Employee;