const Manager = require("../lib/manager");


test('creates a manager object', () => {
  const manager = new Manager('Humberto', '47', 'Humberto@gmail.com', '006');
  
  expect(manager.name).toBe('Humberto');
  expect(manager.id).toBe('47');
  expect(manager.email).toBe('Humberto@gmail.com');
  expect(manager.officeNumber).toBe('006');
});


test("Returns manager's role", () => {
  const manager = new Manager('Humberto', '47', 'Humberto@gmail.com', '006');

  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});