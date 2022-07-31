const cipher = require("../inputs/cipherInput");
test("Return an encrypted message", () => {
  expect(cipher("Hello, I am here. Let eat!")).toBe(
    "Uryyb, V nz urer. Yrg rng!"
  );
});
