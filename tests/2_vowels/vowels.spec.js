import getVowels from './vowels'

it.each([
  ['Apple', 2],
  ['Hippopotamus', 5],
  ['This is a sentence', 6],
  ['Rhythm', 0],
])('should get vowels count of "%s" correctly', (text, expected) => {
  expect(getVowels(text)).toBe(expected)
})
