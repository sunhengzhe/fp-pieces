import { __ } from '../source/gap'
import { add } from '../source/math'

describe('math', () => {
  describe('add', () => {
    test('add two number', () => {
      expect(add(1, 2)).toBe(3)
      expect(add(1)(3)).toBe(4)
      expect(add()(2, 2)).toBe(4)
      expect(add(4, __)(1)).toBe(5)
    })
  })
})
