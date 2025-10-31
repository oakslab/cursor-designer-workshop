"use client";

import * as React from "react";

import { Card } from "~/components/ui/card";
import { Spotlight } from "~/components/ui/spotlight";
import { SplineScene } from "~/components/ui/splite";

export function SplineHero() {
  return (
    <Card className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--primary)"
      />
      <div className="flex h-full">
        {/* Left content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <h1 className="bg-gradient-to-b from-primary via-primary/80 to-primary/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            AI will take your job!
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Embrace the future of automation. Let AI handle the work while you focus on what matters most.
          </p>
        </div>
        {/* Right content */}
        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
}

