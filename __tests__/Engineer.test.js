const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Aldrin",
    1,
    "burgos.aldrin@gmail.com",
    "aldrinburgos18"
  );

  expect(engineer.name).toBe("Aldrin");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("burgos.aldrin@gmail.com");
  expect(engineer.github).toBe("aldrinburgos18");
});
