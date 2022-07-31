const capitalize = require("../inputs/capitalizeInput");
test("Make a string be capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
