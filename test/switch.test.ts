import { _switch, _case } from '../source/switch'

describe('switch', () => {
  test('run case if match', () => {
    const result = _switch(
      () => 'a',
      _case('a', () => 'a'),
      _case('b', () => 'b'),
    )()

    expect(result()).toBe('a')
  })

  test('pass params to _if & _case', () => {
    const result = _switch(
      (num: number) => num % 2 === 0,
      _case(true, (num: number) => num),
      _case(false, (num: number) => num * 2),
    )()

    expect(result(0)).toBe(0)
    expect(result(1)).toBe(2)
    expect(result(2)).toBe(2)
  })

  test('use _default if no _case match', () => {
    const result = _switch(
      (type) => type,
      _case('dog', () => 'dog'),
      _case('cat', () => 'cat'),
    )((type: any) => `is ${type}`)

    expect(result('dog')).toBe('dog')
    expect(result('cat')).toBe('cat')
    expect(result('pig')).toBe('is pig')
  })

  test('throw error if no _case match and no _default', () => {
    const result = _switch(
      (type) => type,
      _case('dog', () => 'dog'),
      _case('cat', () => 'cat'),
    )()

    expect(result('dog')).toBe('dog')
    expect(result('cat')).toBe('cat')
    expect(() => result('pig')).toThrow('No sure what to do with this option')
  })
})
