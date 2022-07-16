import { compose } from '../source/compose'

describe('compose', () => {
  test('1 fn', () => {
    const fn = compose(
      (a: number, b: number) => a + b
    )

    expect(fn(1, 2)).toBe(3)
  })

  test('2 fns', () => {
    const fn = compose(
      (sum: number) => sum * 2,
      (a: number, b: number) => a + b
    )

    expect(fn(1, 2)).toBe(6)
  })

  test('3 fns', () => {
    const fn = compose(
      (result) => `result=${result}`,
      (sum) => sum * 2,
      (a: number, b: number) => a + b
    )

    expect(fn(1, 2)).toBe('result=6')
  })
})
