const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNbr) {
    super(name, id, email);
    this.officeNumber = officeNbr;
  }
}

module.exports = Manager;
