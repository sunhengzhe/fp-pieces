export function reverse(str: string): string
export function reverse<T>(list: T[]): T[]

export function reverse(list: string | any[]) {
  return typeof list === 'string' ? list.split('').reverse().join('') : [...list].reverse()
}