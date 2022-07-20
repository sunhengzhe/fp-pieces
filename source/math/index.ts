import { curry } from '../curry'

export const add = curry((a: number, b: number) => a + b)

export const subtract = curry((a: number, b: number) => a - b)

export const sum = (list: number[]) => list.reduce((acc, cur) => acc + cur, 0)