"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo } from "react";
import { ReactElement, ReactNode } from "react";

export declare type LayoutAnimatorProps = {
  children: ReactElement | ReactElement[] | ReactNode;
};

export default function LayoutAnimator(
  props: LayoutAnimatorProps
): ReactElement {
  const { children } = props;

  let random = useMemo(() => Math.random(), [children]);

  return (
    <AnimatePresence>
      <motion.div
        key={random}
        layout
        initial={{ opacity: 0, position: "absolute", width: "100vw" }}
        animate={{ opacity: 1, position: "static", width: "100vw" }}
        exit={{ opacity: 0, position: "absolute", width: "100vw" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
