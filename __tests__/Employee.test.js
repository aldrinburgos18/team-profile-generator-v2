const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Aldrin", 2, "burgos.aldrin@gmail.com");

  expect(employee.name).toBe("Aldrin");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("burgos.aldrin@gmail.com");
});
