const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern(
    "Aldrin",
    1,
    "burgos.aldrin@gmail.com",
    "2University"
  );

  expect(intern.name).toBe("Aldrin");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("burgos.aldrin@gmail.com"),
    expect(intern.school).toBe("2University");
});

test("gets intern's school", () => {
  const intern = new Intern(
    "Aldrin",
    1,
    "burgos.aldrin@gmail.com",
    "2University"
  );

  expect(intern.getSchool()).toEqual(expect.stringContaining("2University"));
});
