import { pipe } from '../source/pipe'

describe('pipe', () => {
  test('1 fn', () => {
    const fn = pipe(
      (a: number, b: number) => a + b
    )

    expect(fn(1, 2)).toBe(3)
  })

  test('2 fns', () => {
    const fn = pipe(
      (a: number, b: number) => a + b,
      (sum: number) => sum * 2,
    )

    expect(fn(1, 2)).toBe(6)
  })

  test('3 fns', () => {
    const fn = pipe(
      (a: number, b: number) => a + b,
      (sum) => sum * 2,
      (result) => `result=${result}`,
    )

    expect(fn(1, 2)).toBe('result=6')
  })
})
