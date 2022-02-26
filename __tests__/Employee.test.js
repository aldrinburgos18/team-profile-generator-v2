const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Aldrin", 2, "burgos.aldrin@gmail.com");

  expect(employee.name).toBe("Aldrin");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("burgos.aldrin@gmail.com");
});

test("gets employee name", () => {
  const employee = new Employee("Aldrin");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("gets employee's id", () => {
  const employee = new Employee("Aldrin", 1);

  expect(employee.getId()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("gets employee's email", () => {
  const employee = new Employee("Aldrin", 2, "burgos.aldrin@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
