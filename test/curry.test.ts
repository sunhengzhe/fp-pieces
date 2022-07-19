import { curry } from '../source/curry'

const noParams = () => 'noParams'
const oneParams = (a: number) => a
const twoParams = (a: number, b: number) => a + b
const threeParams = (a: number, b: number, c: number) => a + b + c

describe('curry', () => {
  test('run if all params passed', () => {
    expect(curry(noParams)()).toBe('noParams')
    expect(curry(oneParams)(5)).toBe(5)
    expect(curry(twoParams)(5, 9)).toBe(14)
    expect(curry(threeParams)(1, 2, 3)).toBe(6)
  })

  test('return sub_func if not all params passed', () => {
    expect(curry(oneParams)()()).toBe(5)
    expect(curry(twoParams)(2)(12)).toBe(14)
    expect(curry(threeParams)(1)(2)(3)).toBe(6)
    expect(curry(threeParams)(5, 9)(10)).toBe(24)
    expect(curry(threeParams)(5)(8, 12)).toBe(25)
  })
})
