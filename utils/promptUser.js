const inquirer = require("inquirer");
const addTeamMember = require("./addTeamMember");
const {
  validateText,
  validateNum,
  validateEmail,
} = require("./validateAnswers");

const Manager = require("../lib/Manager");

function promptUser() {
  console.log(
    `
    =========================================================================================
    Welcome to Team Profile Generator. To get started, please answer the following questions:
    =========================================================================================
    `
  );
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
        validate: (idInput) => validateNum(idInput),
      },
      {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
        validate: (emailInput) => validateEmail(emailInput),
      },
      {
        type: "input",
        name: "officeNbr",
        message: "What is your office number?",
        validate: (ofcInput) => validateNum(ofcInput),
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
