import { reverse } from '../source/array/reverse'

describe('array.reverse', () => {
  test('reverse string', () => {
    expect(reverse('')).toBe('')
    expect(reverse('abc')).toBe('cba')
  })

  test('reverse array', () => {
    expect(reverse([])).toEqual([])
    expect(reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a'])
  })

  test('reverse array and use shallow copy', () => {
    const strs = ['a', 'b', 'c']
    const rStrs = reverse(strs)
    strs[0] = 'd'
    expect(rStrs).toEqual(['c', 'b', 'a'])

    const objs = [{ i: 0 }, { i: 1 }, { i: 2 }]
    const rObjs = reverse(objs)
    objs[0].i = 3
    expect(rObjs).toEqual([{ i: 2 }, { i: 1 }, { i: 3 }])
  })
})
