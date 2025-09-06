const { add, subtract, multiply, divide } = require('./calculator');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts numbers correctly', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides numbers correctly', () => {
  expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
});
