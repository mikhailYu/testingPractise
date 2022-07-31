const calculator = require("../inputs/calculatorInput");
test("Add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Divide", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});
