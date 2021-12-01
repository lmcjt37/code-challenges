import removeDuplicates from './duplicates'

it.each([
  [[1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5], [1, 2, 3, 4, 5]],
  [['a', 'a', 'b', 'b', 'c', 'd', 'e', 'e'], ['a', 'b', 'c', 'd', 'e']],
])('should remove duplicate "%s" correctly', (arr, expected) => {
  expect(removeDuplicates(arr)).toBe(expected)
})
