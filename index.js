const promptUser = require("./utils/promptUser");
const generatePage = require("./src/page-template");
const fs = require("fs");

promptUser()
  .then((data) => {
    const employeeData = data.employees;
    const manager = employeeData[0];
    var engineers = employeeData.filter(
      (employee) => employee.role == "Engineer"
    );
    var interns = employeeData.filter((employee) => employee.role == "Intern");
    return generatePage(manager, engineers, interns);
  })
  .then((pageContent) => console.log(pageContent));
