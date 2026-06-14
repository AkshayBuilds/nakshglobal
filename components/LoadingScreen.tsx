"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"plane" | "stamp" | "done">("plane");

  useEffect(() => {
    const seen = sessionStorage.getItem("naksh_loaded");
    if (seen) {
      setVisible(false);
      return;
    }

    const t1 = setTimeout(() => setPhase("stamp"), 900);
    const t2 = setTimeout(() => setPhase("done"), 1800);
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("naksh_loaded", "1");
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#03071E] overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 500">
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 32 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 26 + 13}
                  cy={row * 26 + 13}
                  r={1}
                  fill="#5B8DE8"
                />
              ))
            )}
          </svg>

          {phase === "plane" && (
            <motion.div
              initial={{ x: -200, y: 150, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                <path
                  d="M60 4L4 28l20 8 8 20 8-20 20-32z"
                  fill="#E85D04"
                  stroke="#FAAB40"
                  strokeWidth="1.5"
                />
                <path d="M24 36l8-8" stroke="#FAAB40" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
              <motion.svg
                className="absolute top-1/2 right-full"
                width="160"
                height="4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originX: "right" }}
              >
                <line x1="0" y1="2" x2="160" y2="2" stroke="#E85D04" strokeWidth="2" strokeDasharray="6 4" />
              </motion.svg>
            </motion.div>
          )}

          {phase === "stamp" && (
            <motion.div
              initial={{ scale: 2, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex flex-col items-center justify-center border-[6px] border-[#E85D04] rounded-lg px-12 py-8"
              style={{ boxShadow: "0 0 0 2px rgba(232,93,4,0.2), inset 0 0 0 2px rgba(232,93,4,0.2)" }}
            >
              <p className="text-[#E85D04] text-[10px] font-black tracking-[0.3em] uppercase mb-1">
                Approved
              </p>
              <p
                className="text-white text-2xl font-black tracking-tight"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                NAKSH GLOBAL
              </p>
              <p className="text-[#5B8DE8] text-[11px] font-semibold tracking-[0.2em] uppercase mt-1">
                Visa & Immigration
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
