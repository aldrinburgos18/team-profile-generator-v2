const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Aldrin", 1, "burgos.aldrin@gmail.com", 101);

  expect(manager.name).toBe("Aldrin");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("burgos.aldrin@gmail.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
  const manager = new Manager("Aldrin");

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
