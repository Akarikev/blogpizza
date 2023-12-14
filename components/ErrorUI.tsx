import React from "react";
import { LucidePizza } from "lucide-react";
function ErrorUI() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen place-items-center">
        <LucidePizza
          width={50}
          height={50}
          className="text-gray-700 animate-spin mt-6 "
        />
        <h1 className="text-xl  text-muted-foreground mt-3 text-center">
          Oh no, 😥 your pizza delivery failed!
        </h1>

        <small>it might be a problem with our delivery!</small>
      </div>
    </div>
  );
}

export default ErrorUI;
