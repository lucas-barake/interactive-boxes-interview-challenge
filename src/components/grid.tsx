import React from "react";
import { createId } from "@paralleldrive/cuid2";
import { cn } from "@/utils/cn.ts";
import { Button } from "@/components/button.tsx";
import { shuffle2dArray } from "@/utils/shuffle-2d-array.ts";
import { are2dArraysEqual } from "@/utils/are-2d-arrays-equal.ts";

type Box = {
  id: string;
  value: number;
};
function createMatrix(size: number): Box[][] {
  const matrix: Box[][] = [];

  let counter = 1;

  for (let i = 0; i < size; i++) {
    const row: Box[] = [];

    for (let j = 0; j < size; j++) {
      row.push({
        id: createId(),
        value: counter,
      });

      counter += 1;
    }

    matrix.push(row);
  }

  return matrix;
}

type Props = {
  size: number;
};

export const Grid: React.FC<Props> = ({ size }) => {
  const initialGrid = React.useMemo(() => createMatrix(size), [size]);
  const [grid, setGrid] = React.useState<Box[][]>(initialGrid);
  const [selectedIds, setSelectedIds] = React.useState<Array<Box["id"]>>([]);

  function toggleSelected(id: Box["id"]): void {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevId) => prevId !== id);
      }
      return [...prev, id];
    });
  }

  return (
    <React.Fragment>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((box) => (
            <button
              type="button"
              key={box.id}
              className={cn(
                "border border-border p-2 h-10 w-10",
                selectedIds.includes(box.id) ? "bg-primary" : "bg-transparent"
              )}
              onClick={() => {
                toggleSelected(box.id);
              }}>
              {box.value}
            </button>
          ))}
        </div>
      ))}

      <div className="flex items-center gap-2 mt-4">
        <Button
          type="button"
          onClick={() => {
            setGrid((prev) => shuffle2dArray(prev));
          }}>
          Shuffle
        </Button>

        <Button
          type="button"
          disabled={
            selectedIds.length === 0 && are2dArraysEqual(grid, initialGrid)
          }
          onClick={() => {
            setGrid(initialGrid);
            setSelectedIds([]);
          }}>
          Reset
        </Button>
      </div>
    </React.Fragment>
  );
};
