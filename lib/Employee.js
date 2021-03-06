class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return `Your employee's name is ${this.name}`;
  }

  getId() {
    return `Your employee's id is ${this.id}`;
  }

  getEmail() {
    return `Your employee's email is ${this.email}`;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
