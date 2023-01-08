"use client";

import { motion } from "framer-motion";
import { IHero } from "../lib/interfaces/components/sections";
import Link from "./Link";

export declare type HeroProps = {
  component: IHero;
};

export default function Hero(props: HeroProps) {
  const {
    component: { title, description, button },
  } = props;

  return (
    <div className="min-h-[756px] pt-36 pb-32 container grid grid-cols-2">
      <div>
        <motion.h1
          className="leading-normal text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-rose-800 via-rose-600 to-rose-200"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Hi! I am
          <br />
          Nicky Matthijssen
        </motion.h1>

        <motion.p
          className="mb-12"
          initial={{ translateY: 50, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ translateX: 50, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Link link={button} className="btn btn--primary" />
        </motion.div>
      </div>

      <div></div>
    </div>
  );
}
