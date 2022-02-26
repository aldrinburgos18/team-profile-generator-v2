const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNbr) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNbr;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
