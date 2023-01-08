"use client";

import { IPageHeader } from "../../lib/interfaces/components/sections";
import StrapiImage from "../StrapiImage";
import { motion } from "framer-motion";

export declare type PageHeaderProps = {
  component: IPageHeader;
};

export default function PageHeader(props: PageHeaderProps) {
  const {
    component: { title, background },
  } = props;

  const hasBackground = !!background.data;

  return (
    <section
      className={`${
        hasBackground ? "bg-transparent" : "bg-rose-900"
      } relative min-h-[412px] py-16 flex items-center after:content-[''] after:absolute after:inset-0 after:bg-black/25 after:z-[0]`}
    >
      <div className="container text-center z-10">
        <motion.h1
          className="text-white mb-0"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.15 }}
        >
          {title}
        </motion.h1>
      </div>

      <motion.div
        className="w-full h-full absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <StrapiImage
          image={background.data}
          className="object-cover pointer-events-none w-full h-full"
          width={2560}
          height={412}
        />
      </motion.div>
    </section>
  );
}
