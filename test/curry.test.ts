import { curry } from '../source/curry'
import { __ } from '../source/gap'

const noParams = () => 'noParams'
const oneParams = (a: number) => a
const twoParams = (a: number, b: number) => a - b
const threeParams = (a: number, b: number, c: number) => a - (b - c)

describe('curry', () => {
  test('run if all params passed', () => {
    expect(curry(noParams)()).toBe('noParams')
    expect(curry(oneParams)(1)).toBe(1)
    expect(curry(twoParams)(2, 3)).toBe(2 - 3)
    expect(curry(threeParams)(10, 2, 5)).toBe(10 - (2 - 5))
  })

  test('return sub_func if not all params passed', () => {
    expect(curry(oneParams)()(5)).toBe(5)
    expect(curry(twoParams)(2)(12)).toBe(2 - 12)
    expect(curry(threeParams)(1)(2)(3)).toBe(1 - (2 - 3))
    expect(curry(threeParams)(5, 2)(10)).toBe(5 - (2 - 10))
    expect(curry(threeParams)(15)(3, 4)).toBe(15 - (3 - 4))
  })

  test('support placeholder', () => {
    expect(curry(oneParams)(__)(5)).toBe(5)
    expect(curry(twoParams)(__, 2)(12)).toBe(12 - 2)
    expect(curry(threeParams)(10, __, __)(4)(1)).toBe(10 - (4 - 1))
    expect(curry(threeParams)(__, 9, __)(5, 10)).toBe((5 - (9 - 10)))
    expect(curry(threeParams)(__, __, 12)(5)(8)).toBe((5 - (8 - 12)))

    expect(() => curry(threeParams)(__, __, 12)(__)(5, 8)).toThrow('too many gaps')
  })
})
