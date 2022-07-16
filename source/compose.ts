export function compose<TArgs extends any[], R1, R2, R3, R4, TResult> (...fns: [
  fLast: (a: any) => TResult,
  ...func: Array<(a: any) => any>,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
]): (...args: TArgs) => TResult

export function compose<TArgs extends any[], R1, R2, R3, R4>(
  f4: (arg: R3) => R4,
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2

export function compose<TArgs extends any[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2

export function compose<TArgs extends any[], R1, R2>(
  f2: (arg: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2

export function compose<TArgs extends any[], R>(
  f1: (...args: TArgs) => R
): (...args: TArgs) => R

export function compose(...fns: any[]) {
  return (...args: any) => fns.reduceRight((prev, cur) => [cur.call(null, ...prev)], args)[0]
}