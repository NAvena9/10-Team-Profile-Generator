const Employee = require("../lib/employee");

test('Creates an employee', () => {
  const employee = new Employee('Nicolas', '99', 'nicolas@gmail.com');

  expect(employee.name).toBe('Nicolas');
  expect(employee.id).toBe('99');
  expect(employee.email).toBe('nicolas@gmail.com');
});

test("Return employee's name", () => {
  const employee = new Employee('Nicolas', '99', 'nicolas@gmail.com');

  expect(employee.getName()).toEqual(expect.stringContaining('Nicolas'));
});

test("Return employee's ID", () => {
  const employee = new Employee('Nicolas', '99', 'nicolas@gmail.com');

  expect(employee.getId()).toEqual(expect.stringContaining('99'));
});

test("Return employee's email", () => {
  const employee = new Employee('Nicolas', '99', 'nicolas@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining('nicolas@gmail.com'));
});