import { _switch, _case } from '../source/switch'

describe('switch', () => {
  test('run case if match', () => {
    const fn = _switch(
      () => 'a',
      _case('a', () => 'a'),
      _case('b', () => 'b'),
    )()

    expect(fn()).toBe('a')
  })

  test('pass params to _if & _case', () => {
    const fn = _switch(
      (num: number) => num % 2 === 0,
      _case(true, (num: number) => num),
      _case(false, (num: number) => num * 2),
    )()

    expect(fn(0)).toBe(0)
    expect(fn(1)).toBe(2)
    expect(fn(2)).toBe(2)
  })

  test('use _default if no _case match', () => {
    const fn = _switch(
      (type) => type,
      _case('dog', () => 'dog'),
      _case('cat', () => 'cat'),
    )((type) => `is ${type}`)

    expect(fn('dog')).toBe('dog')
    expect(fn('cat')).toBe('cat')
    expect(fn('pig')).toBe('is pig')
  })

  test('throw error if no _case match and no _default', () => {
    const fn = _switch(
      (type) => type,
      _case('dog', () => 'dog'),
      _case('cat', () => 'cat'),
    )()

    expect(fn('dog')).toBe('dog')
    expect(fn('cat')).toBe('cat')
    expect(() => fn('pig')).toThrow('No sure what to do with this option')
  })

  test('readme usage', () => {
    const fn = _switch(
      (person) => person.type,
      _case('student', (student) => student.grade),
      _case('worker', (worker) => worker.job),
    )((person) => 'unknown:' + person.type)

    expect(fn({ type: 'student', grade: 6 })).toBe(6)
    expect(fn({ type: 'worker', job: 'engineer' })).toBe('engineer')
    expect(fn({ type: 'aliens' })).toBe('unknown:aliens')
  })
})
