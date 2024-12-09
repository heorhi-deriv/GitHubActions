const { sum } = require("./sum");

describe("sum", () => {
  it("sums two numbers correctly", () => {
    expect(sum(1, 3)).toBe(4);
  });
});
