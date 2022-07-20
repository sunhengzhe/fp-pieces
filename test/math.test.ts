import { __ } from '../source/gap'
import { add, subtract, sum } from '../source/math'

describe('math', () => {
  describe('add', () => {
    test('add two number', () => {
      expect(add(1, 2)).toBe(3)
      expect(add(1)(3)).toBe(4)
      expect(add()(2, 2)).toBe(4)
      expect(add(4, __)(1)).toBe(5)
    })
  })

  describe('subtract', () => {
    test('a - b', () => {
      expect(subtract(1, 2)).toBe(-1)
      expect(subtract(__, 5)(12)).toBe(7)
      expect(subtract(90)(30)).toBe(60)
    })
  })

  describe('sum', () => {
    test('should return sum of arr', () => {
      expect(sum([])).toBe(0)
      expect(sum([1])).toBe(1)
      expect(sum([1, 2, 3, 4])).toBe(10)
    })
  })
})
