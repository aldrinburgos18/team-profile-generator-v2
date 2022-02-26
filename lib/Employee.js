class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `Your employee's name is ${this.name}`;
  }

  getId() {
    return `Your employee's id is ${this.id}`;
  }
}

module.exports = Employee;
