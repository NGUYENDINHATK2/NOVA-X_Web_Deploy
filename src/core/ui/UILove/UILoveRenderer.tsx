"use client";
import React, { useEffect, useState } from "react";
import { loveStore } from "./loveStore";

export const UILoveRenderer = () => {
  const [hearts, setHearts] = useState(loveStore.getHearts());

  useEffect(() => {
    const unsubscribe = loveStore.subscribe(() => {
      setHearts([...loveStore.getHearts()]);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute from-indigo-400 via-purple-300 to-cyan-300text-3xl animate-pop"
          style={{
            left: h.x,
            top: h.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
};

export default UILoveRenderer;
