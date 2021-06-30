const Intern = require("../lib/intern");

test ('Create an Intern', () => {
  const intern = new Intern('Dora', '00145', 'Dora@gmail.com', 'UCBerkeley');

  expect(intern.name).toBe('Dora');
  expect(intern.id).toBe('00145');
  expect(intern.email).toBe('Dora@gmail.com');
  expect(intern.school).toBe('UCBerkeley');
});

test("Return Intern's school", () => {
  const intern = new Intern('Dora', '00145', 'Dora@gmail.com', 'UCBerkeley');
  expect(intern.getSchool()).toEqual(expect.stringContaining('UCBerkeley'));
});

test("Returns Intern's role", () => {
  const intern = new Intern('Dora', '00145', 'Dora@gmail.com', 'UCBerkeley');

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});