const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it('return an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });

  it('return an array of the same length as the argument sent in', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  it('contain all the same items as the original array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    inputArray.forEach((item) => {
      expect(shuffledArray).toContain(item);
    });
  });

  it('shuffle the items in the array', () => {
    // Mock Math.random to always return 0.5 for consistent shuffling
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);

    // Reset the mock after the test to restore normal Math.random behavior
    global.Math.random.mockRestore();

    // Check if the array is different from the original order
    expect(shuffledArray).not.toEqual(inputArray);
  });
});
