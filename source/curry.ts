import { F } from 'ts-toolbelt'
import { __ } from './gap'

export function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>

export function curry(fn: any) {
  return function curry_inner(...args: any[]) {
    const realArgs = args.filter(arg => arg !== __)

    if (realArgs.length >= fn.length) {
      let right = fn.length
      for (let i = 0; i < fn.length; i++) {
        if (args[i] === __) {
          if (args[right] === __) {
            throw new Error('too many gaps')
          }

          args[i] = args[right++]
        }
      }

      return fn(...args)
    } else {
      return (...rest: any[]) => curry_inner(...args.concat(rest))
    }
  }
}
