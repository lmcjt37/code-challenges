import isPalindrome from './palindrome'

it.each([
  'a',
  'level',
  'madam',
  'radar',
  'redder',
  'repaper',
  'sagas',
  'solos',
  'anna',
  'kayak',
])('"%s" should be a palindrome', (word) => {
  expect(isPalindrome(word)).toBe(true)
})

it.each([
  '',
  'apple',
  'battery',
  'car',
  'dog',
  'keyboard',
  'pencil',
  'phone',
  'problem',
  'transport',
])('"%s" should not be a palindrome', (word) => {
  expect(isPalindrome(word)).toBe(false)
})
