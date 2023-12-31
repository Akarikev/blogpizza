import React from "react";
import { LucidePizza } from "lucide-react";
function LoadingUI() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen place-items-center">
        <LucidePizza
          width={50}
          height={50}
          className="text-pink-700 animate-pulse mt-6 "
        />
        <h1 className="text-xl  text-muted-foreground mt-3 text-center">
          Loading your daily pizza slice!...
        </h1>
      </div>
    </div>
  );
}

export default LoadingUI;
