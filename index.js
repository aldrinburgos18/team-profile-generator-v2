const inquirer = require("inquirer");

function init() {
  console.log(`
=============
HELLO MANAGER!
=============`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
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
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add a team member?",
        default: true,
      },
    ])
    .then((employeeData) => {
      if (employeeData.confirmAddEmployee) {
        return addTeamMember(employeeData);
      }

      return employeeData;
    });
}

function addTeamMember(employeeData) {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberSelect",
        message: "Which team member would you like to add?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((teamMemberData) => {
      if (teamMemberData.teamMemberSelect === "Engineer") {
        addEngineer(employeeData);
      } else {
        addIntern(employeeData);
      }
    });
}

function addEngineer(employeeData) {
  console.log(employeeData);
}

function addIntern(employeeData) {
  console.log(employeeData);
}

init().then((data) => console.log(data));
