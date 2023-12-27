import React from "react";
import { cn } from "@/utils/cn.ts";

type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"button">;
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded disabled:bg-primary/50",
          className
        )}
        {...props}
      />
    );
  }
);
