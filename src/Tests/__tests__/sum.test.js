// test("name of test", () => {
//  callback
// })

import { sum } from "../sum";

test("Sum returns the addition of two inputs", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
