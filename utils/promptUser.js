const inquirer = require("inquirer");
const addTeamMember = require("./addTeamMember");
const validateText = require("./validateAnswers");

const Manager = require("../lib/Manager");

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => validateText(nameInput),
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
      },
      {
        type: "input",
        name: "officeNbr",
        message: "What is your office number?",
      },
    ])
    .then((employeeData) => {
      //create employees array
      if (!employeeData.employees) {
        employeeData.employees = [];
      }

      const manager = new Manager(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.officeNbr
      );

      employeeData.employees.push(manager);
      return addTeamMember(employeeData);
    });
}

module.exports = promptUser;
