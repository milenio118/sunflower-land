import React, { useEffect } from "react";
import deathAnimation from "assets/npcs/human_death.gif";

export const GameError: React.FC = () => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.style.pointerEvents = "none";
    }
  }, []);

  return (
    <div id="gameerror" className="flex flex-col items-center p-2">
      <span className="text-shadow text-center">Something went wrong!</span>
      <img src={deathAnimation} className="w-1/2 -mt-4 ml-8" />
      <span className="text-shadow text-xs text-center">
        Looks like we were unable to connect with our servers. Please refresh
        and try again.
      </span>
    </div>
  );
};
