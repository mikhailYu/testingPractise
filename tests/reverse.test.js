const reverse = require("../inputs/reverseInput");
test("Reverse a string", () => {
  expect(reverse("hello")).toBe("olleh");
});
