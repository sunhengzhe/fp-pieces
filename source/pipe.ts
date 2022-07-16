import { reverse } from './array/reverse'
import { compose } from './compose'

export function pipe<TArgs extends any[], R1, R2, R3, R4, TResult> (...fns: [
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  ...func: Array<(a: any) => any>,
  fLast: (a: any) => TResult,
]): (...args: TArgs) => TResult

export function pipe<TArgs extends any[], R1, R2, R3, R4>(
  f1: (...args: TArgs) => R1,
  f2: (arg: R1) => R2,
  f3: (arg: R2) => R3,
  f4: (arg: R3) => R4,
): (...args: TArgs) => R4

export function pipe<TArgs extends any[], R1, R2, R3>(
  f1: (...args: TArgs) => R1,
  f2: (arg: R1) => R2,
  f3: (arg: R2) => R3,
): (...args: TArgs) => R3

export function pipe<TArgs extends any[], R1, R2>(
  f1: (...args: TArgs) => R1,
  f2: (arg: R1) => R2,
): (...args: TArgs) => R2

export function pipe<TArgs extends any[], R>(
  f1: (...args: TArgs) => R
): (...args: TArgs) => R

/**
 * Run functions from left to right
 * @param fns
 * @returns
 */
export function pipe(...fns: any[]) {
  return compose(...(reverse(fns) as [any]))
}