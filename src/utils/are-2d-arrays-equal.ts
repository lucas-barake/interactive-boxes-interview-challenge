export function are2dArraysEqual(a: unknown[][], b: unknown[][]): boolean {
  return a.every((row, i) => row.every((value, j) => value === b[i][j]));
  // JSON.stringify(a) === JSON.stringify(b);
}
