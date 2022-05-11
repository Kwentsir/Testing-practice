const reverseString = require("./reverseString")
describe("This checks whether the input value is returning the reverse version", () => {
    test("When you enter 'hello' the output should be 'olleh'", () => {
        expect(reverseString("hello")).toBe("olleh");
    })
})