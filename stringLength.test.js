const stringLength = require("./stringLength");
test("When you enter a string 'Bob', it should return 3", () => {
  expect(stringLength("Bob")).toBe(3);
});
test("Input should not be less than 1", () => {
  expect(() => stringLength()).toThrow();
  expect(() => stringLength()).toThrow(Error);
});
