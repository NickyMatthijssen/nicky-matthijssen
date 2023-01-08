"use client";

import { motion } from "framer-motion";
import useGlobals from "../../hooks/useGlobals";
import Form from "./Form";

export default function Contact(): React.ReactElement | null {
  const globals = useGlobals();

  if (!globals?.contact) {
    return null;
  }

  return (
    <div className="py-32 mt-16 bg-neutral-800" id="contact">
      <div className="container">
        <motion.div
          className="text-6xl font-lg text-white font-semibold max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="react-markdown react-markdown--white"
            dangerouslySetInnerHTML={{ __html: globals?.contact?.title }}
          />
        </motion.div>

        <Form />
      </div>
    </div>
  );
}
