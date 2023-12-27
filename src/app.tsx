import React from "react";
import { Button } from "@/components/button.tsx";
import { Input } from "@/components/input.tsx";
import { z } from "zod";
import { Grid } from "@/components/grid.tsx";

const App: React.FC = () => {
  const [size, setSize] = React.useState<number | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const parsedData = z
      .number({
        coerce: true,
      })
      .positive()
      .min(1)
      .safeParse(formData.get("grid"));

    if (parsedData.success) {
      setSize(parsedData.data);
    }
  }

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <label className="flex flex-col">
          Grid size
          <Input type="number" min="1" max="100" name="grid" />
        </label>

        <Button type="submit">Create Grid</Button>
      </form>

      {size !== null && <Grid size={size} key={size} />}
    </section>
  );
};

export default App;
