export const randomNDigitsString = (n: number): string =>
  Array.from({ length: n })
    .map(() => ~~(Math.random() * 10))
    .join('')
