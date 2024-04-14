// calculator.test.ts
import { add, divide } from './calculator';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('divides 4 / 0 to throw error', () => {
    expect(() => divide(4, 0)).toThrow("Cannot divide by zero.");
});
