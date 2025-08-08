'use client';

import { useEffect, useState } from 'react';
import { loading } from './loading';
import { loadingEvents } from './loading-events';
import { AnimatePresence, motion } from 'framer-motion';

export const UILoadingRenderer = () => {
  const [visible, setVisible] = useState(loading.isVisible());

  useEffect(() => {
    const update = () => setVisible(loading.isVisible());
    const unsubscribe = loadingEvents.subscribe(update);
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
