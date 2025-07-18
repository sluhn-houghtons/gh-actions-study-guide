const { addNumbers } = require("../src/addNumbers");

describe("Add numbers function", () => {
  it("should add two numbers", () => {
    //arrange
    const sut = addNumbers;
    //act
    const result = sut(1, 2);
    //assert
    expect(result).toBe(3);
  });

  it("should add two numbers even if args are string", () => {
    //arrange
    const sut = addNumbers;
    //act
    const result = sut("1", 2);
    //assert
    expect(result).toBe(3);
  });
});
