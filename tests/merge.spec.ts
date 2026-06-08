import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge arrays into ascending order ", () => {
    expect(
      merge(
        [9, 7, 5, 3, 1],
        [2, 4, 6, 8],
        [0, 10, 11]
      )
    ).toEqual([
      0, 1, 2, 3, 4, 5,
      6, 7, 8, 9, 10, 11
    ]);
  });
});