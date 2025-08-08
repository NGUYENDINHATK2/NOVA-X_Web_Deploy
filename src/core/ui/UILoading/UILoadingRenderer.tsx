"use client";

import { useEffect, useState } from "react";
import { loading } from "./loading";
import { loadingEvents } from "./loading-events";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { NovaXLogo } from "@/assets/lotties";
export const UILoadingRenderer = () => {
  const [visible, setVisible] = useState(loading.isVisible());

  useEffect(() => {
    const update = () => setVisible(loading.isVisible());
    const unsubscribe = loadingEvents.subscribe(update);
    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center flex-col justify-center">
            <motion.div
              initial={{ y: 200, opacity: 0, scale: 0.9 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                x: [0, -4, 4, -4, 0],
              }}
              transition={{
                y: {
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  duration: 1.5,
                },
                opacity: { duration: 0.5 },
                scale: { duration: 1.5 },
                x: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 0.98, 1.02, 1],
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Lottie
                  animationData={NovaXLogo}
                  loop={true}
                  className="w-96 h-60"
                />
              </motion.div>
            </motion.div>

            <NovaXTitle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const text = "NOVA-X";
const letters = text.split("");

const letterVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: Math.sin(index) * 200,
    y: Math.cos(index) * 150,
    rotate: index % 2 === 0 ? -45 : 45,
    scale: 0.5,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      duration: 2,
    },
  },
};

export function NovaXTitle() {
  return (
    <h1 className="relative inline-block text-6xl md:text-7xl font-extrabold tracking-tight">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: i * 0.1 }}
          className="inline-block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}
