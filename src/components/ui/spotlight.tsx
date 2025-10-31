"use client";

import * as React from "react";
import { cn } from "~/lib/utils";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string;
}

export function Spotlight({ className, fill = "white", ...props }: SpotlightProps) {
  const getBackgroundColor = () => {
    if (fill.includes("var(--")) {
      // For CSS variables, use the variable directly with opacity via a pseudo-element or wrapper
      // Using a simpler approach: create a gradient that uses the variable
      return `radial-gradient(ellipse at center, ${fill} 0%, transparent 70%)`;
    }
    return `radial-gradient(ellipse at center, ${fill}33 0%, transparent 70%)`;
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-0 h-full w-full blur-[100px]",
        className
      )}
      style={{
        background: getBackgroundColor(),
        opacity: fill.includes("var(--") ? 0.3 : 0.4,
      }}
      {...props}
    />
  );
}

