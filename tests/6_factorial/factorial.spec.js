import factorial from './factorial'

it.each([
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
  [8, 40320],
  [9, 362880],
  [10, 3628800],
])('should compute correct value for "%d"', (num, expected) => {
  expect(factorial(num)).toBe(expected)
})
