const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function init() {
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

function addTeamMember(employeeData) {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectEmployee",
        message: "Would you like to add more team members?",
        choices: [
          "Engineer",
          "Intern",
          "No, I don't want to add another team member",
        ],
      },
      {
        type: "input",
        name: "name",
        message: ({ selectEmployee }) =>
          `What is your ${selectEmployee}'s name?`,
        when: ({ selectEmployee }) => {
          if (selectEmployee === "Engineer" || selectEmployee === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: ({ selectEmployee }) =>
          `What is your ${selectEmployee}'s ID number?`,
        when: ({ selectEmployee }) => {
          if (selectEmployee === "Engineer" || selectEmployee === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: ({ selectEmployee }) =>
          `What is your ${selectEmployee}'s e-mail address?`,
        when: ({ selectEmployee }) => {
          if (selectEmployee === "Engineer" || selectEmployee === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineer's GitHub username?",
        when: ({ selectEmployee }) => {
          if (selectEmployee === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does your Intern go to?",
        when: ({ selectEmployee }) => {
          if (selectEmployee === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((employee) => {
      if (employee.selectEmployee === "Engineer") {
        //push engineer into employees array
        const engineer = new Engineer(
          employee.name,
          employee.id,
          employee.email,
          employee.github
        );

        employeeData.employees.push(engineer);
        return addTeamMember(employeeData);
      } else if (employee.selectEmployee === "Intern") {
        //push intern into employees array
        const intern = new Intern(
          employee.name,
          employee.id,
          employee.email,
          employee.school
        );

        employeeData.employees.push(intern);
        return addTeamMember(employeeData);
      } else {
        return employeeData;
      }
    });
}

init().then((data) => console.log(data.employees));
