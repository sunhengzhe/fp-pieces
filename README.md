# FP Pieces

Some functional programming style's codes.

### Switch Case

代替 `switch...case` 语句。

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