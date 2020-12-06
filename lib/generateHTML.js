var twig = require("twig");
const fs = require('fs');

function generateHTML(employees) {
    var manager = employees[0];
    var engineers = employees.filter((employee) => employee.role == "Engineer");
    var interns = employees.filter((employee) => employee.role == "Intern");

    twig.renderFile('./src/index.twig', {manager:manager, engineers:engineers, interns:interns}, (err, html) => {
        if(err){
            console.log(err);
            return;
        }
        fs.writeFile('./dist/index.html', html, (err) => {
            if (err) throw err;
            console.log("Your team profile has been saved to './dist/index.html'! ");
          });

        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) throw err;
    });
    });
};

module.exports = generateHTML;