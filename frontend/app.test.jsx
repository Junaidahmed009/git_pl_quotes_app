import {describe, test, expect} from "vitest";
import {add} from "./add.jsx";

describe("add", () => {

  test("adds numbers", () => {
    expect(add(4, 3)).toBe(7);
  });

});