const calculator = require("./calculator");

describe("It is a calculator operating four different signs on two numbers", () => {
  test("Add two numbers", () => {
    expect(calculator(1, 2, "+")).toBe(3);
  });

  test("0 plus 0 should be equal 0", () => {
    expect(calculator(0, 0, "+")).toBe(0);
  });

   test("0 plus 0 should be equal to empty string", () => {
     expect(calculator(0, 0, "")).toBeUndefined();
   });

  test("Substract two numbers", () => {
    expect(calculator(2, 1, "-")).toBe(1);
  });

  test("0 minus 0 should be equal to 0", () => {
    expect(calculator(0, 1, "-")).toBe(-1);
  });

  test("0 minus 0 should be equal to empty string", () => {
    expect(calculator(0, 0, "")).toBeUndefined();
  });

  test("Multiply two numbers", () => {
    expect(calculator(2, 2, "*")).toBe(4);
  });

  test("0 multiply 0 should be equal to 0", () => {
    expect(calculator(0, 0, "*")).toBe(0);
  });

  test("Divide two numbers", () => {
    expect(calculator(2, 1, "/")).toBe(2);
  });

  test("0 divided by 0 should be NaN", () => {
    expect(calculator(0, 0, "/")).toBe(NaN);
  });

  test("0 divided by 2 should be equal to 0", () => {
    expect(calculator(0, 2, "/")).toBe(0);
  });
});
