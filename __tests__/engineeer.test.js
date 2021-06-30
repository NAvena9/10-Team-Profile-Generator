const Engineer = require("../lib/engineer");

test('Create an engineer', () => {
  const engineer = new Engineer ('Victor', '23', 'victor@gmail.com', 'victorca')
  
  expect(engineer.name).toBe('Victor');
  expect(engineer.id).toBe('23');
  expect(engineer.email).toBe('victor@gmail.com');
  expect(engineer.github).toBe('victorca');
});

test ("Returns engineer's github user", () => {
  const engineer = new Engineer ('Victor', '23', 'victor@gmail.com', 'victorca')

  expect(engineer.getGithub()).toEqual(expect.stringContaining('victorca'));
});

test("Returns Engineer's role", () => {
  const engineer = new Engineer ('Victor', '23', 'victor@gmail.com', 'victorca')

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});