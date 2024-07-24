const add = (n1, n2) => n1 + n2;

test("should pass the test", () => {
  expect(add(2, 4)).toEqual(6);
});

test("should pass the test when not supplied the other values", () => {
  expect(add(2, 4)).not.toEqual(7);
});
