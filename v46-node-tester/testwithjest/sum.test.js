const sum = require("./sum");

test("test that 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});
