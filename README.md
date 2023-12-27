# React Interview Challenge

## Objective

Develop a React application that dynamically generates an interactive grid of boxes based on user input, ensuring the
grid is symmetric.

## Instructions

1. Provide a form with an input field and a "Create Grid" submit button. The user should input a single number to
   determine the dimensions of the grid (e.g., 3 for a 3x3 grid, i.e., **n x n**). Each box should display a number from
   1 to n<sup>2</sup>, centered in the box. You should validate the user input and handle any invalid or empty inputs
   gracefully.
2. When the user clicks on a box, the box should change its background color to blue, indicating that it is selected. If
   the user clicks on the same box again, the box should revert to its original background color, indicating that it is
   deselected.
3. The user should be able to select multiple boxes at a time.
4. There should be two buttons below the grid: “Reset” and “Shuffle”. The “Reset” button should clear all the selections
   and restore the original order of the numbers in the grid. The “Shuffle” button should randomly rearrange the numbers
   in the grid, using the Fisher-Yates shuffle algorithm. The “Reset” button should be disabled if there are no
   selections, and enabled otherwise.
5. You can use the following TypeScript code to implement the Fisher-Yates shuffle algorithm. This function takes a
   2-dimensional array of `T` as input and returns a shuffled copy of the array.

```typescript
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
```

## Evaluation Criteria:

Your solution will be evaluated based on the following criteria:

- Accurate implementation of the specified features and validation.
- Clean and maintainable code structure.
- Adherence to React best practices.
- Proper utilization of state, event handling, and input validation.
- Efficient handling of dynamic grid generation based on user input.
