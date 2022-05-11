const capitalize = require("./capitalize");
describe("This takes a string return with the first letter capitalized", () => {
  test("When you enter 'hello' it should return 'Hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
