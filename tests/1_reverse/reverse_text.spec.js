import reverseText from './reverse_text'

it.each([
  ['', ''],
  ['a', 'a'],
  ['foo', 'oof'],
  ['bar', 'rab'],
  ['test', 'tset'],
  ['JavaScript', 'tpircSavaJ'],
])('should reverse "%s" correctly', (text, expected) => {
  expect(reverseText(text)).toBe(expected)
})
