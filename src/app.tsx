import React from "react";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl mb-2">Vite + React</h1>

      <div className="flex gap-2 items-center flex-col">
        <button
          type="button"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}>
          count is {count}
        </button>

        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
    </section>
  );
};

export default App;
