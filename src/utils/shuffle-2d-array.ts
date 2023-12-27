export function shuffle2dArray<T>(array: T[][]): T[][] {
  const result = array.map((row) => [...row]);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = result[i].length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [result[i][j], result[i][k]] = [result[i][k], result[i][j]];
    }
  }
  return result;
}
