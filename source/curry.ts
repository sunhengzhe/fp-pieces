import { F } from 'ts-toolbelt'

export function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>

export function curry(fn: any) {
  return function curry_inner(...args: any[]) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...rest: any[]) => curry_inner(...[...args, ...rest])
    }
  }
}
