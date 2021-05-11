const { Human, Employee } = require("./app");

describe("Testing Human class", () => {
  const humanInstance = new Human("Fatma", "1992-4-20", "F");
  test(`instance has a name`, () => {
    expect(humanInstance.name).not.toBeNull();
    expect(humanInstance.name).not.toBeUndefined();
  });
  test(`instance has a birthdate`, () => {
    expect(humanInstance.birthdate).not.toBeNull();
    expect(humanInstance.birthdate).not.toBeUndefined();
  });
  test(`instance has a gender`, () => {
    expect(humanInstance.gender).not.toBeNull();
    expect(humanInstance.gender).not.toBeUndefined();
  });
});

describe("Testing Employee class", () => {
  const employeeInstance = new Employee("Fatma", "1992-4-20", "F", 1600);
  test(`instance has a salary property`, () => {
    expect(employeeInstance.salary).not.toBeNull();
    expect(employeeInstance.salary).not.toBeUndefined();
  });
  test(`instance has a working 5% bonus method`, () => {
    expect(employeeInstance.bonus(0.05)).toEqual(
      employeeInstance.salary * 1.05
    );
  });
});
