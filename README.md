# FP Pieces

Some functional programming style's codes.

## Array

### reverse

Reverse string or array. Use **shallow copy**.

```ts
reverse('abc') // cba
reverse(['a', 'b', 'c']) // ['c', 'b', 'a']

// Warning
const objs = [{ i: 0 }, { i: 1 }, { i: 2 }]
const rObjs = reverse(objs)
// rObjs will be affected
objs[0].i = 3

rObjs // [{ i: 2 }, { i: 1 }, { i: 3 }]
```

## Control flow

### compose

Run functions from right to left.

```ts
const fn = compose(
  (result) => `result=${result}`,
  (sum) => sum * 2,
  (a: number, b: number) => a + b,
)

fn(1, 2) // result=6
```

### pipe

In contrast to [compose](#compose), run functions from left to right.

```ts
const fn = pipe(
  (a: number, b: number) => a + b,
  (sum) => sum * 2,
  (result) => `result=${result}`,
)

fn(1, 2) // result=6
```

### _switch

Behavior similar to `switch...case`.

```ts
const demo = _switch(
  (person) => person.type,
  _case('student', (student) => student.grade),
  _case('worker', (worker) => worker.job),
)((person) => 'unknown:' + person.type)

demo({ type: 'student', grade: 6 }) // 6
demo({ type: 'worker', job: 'engineer' }) // engineer
demo({ type: 'aliens' }) // unknown:aliens
```