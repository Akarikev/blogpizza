import React from "react";
import { LucidePizza } from "lucide-react";
function LoadingUI() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <LucidePizza
          width={100}
          height={100}
          className="text-pink-700 animate-pulse mt-6 "
        />
        <h1 className="text-2xl font-bold text-muted-foreground mt-3 text-center">
          Loading your daily pizza slice!...
        </h1>
      </div>
    </div>
  );
}

export default LoadingUI;
