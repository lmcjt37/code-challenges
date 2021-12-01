import dataManipulation from './data_manipulation'
import data from './data'

it('should meet requirements', () => {
  expect(dataManipulation(data)).toEqual({ a: '32', b: '20', d: '22' })
})
