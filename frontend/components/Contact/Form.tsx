"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Form() {
  return (
    <form className="max-w-lg mx-auto flex space-x-8 align-items-center mt-12">
      <div className="w-full">
        <motion.input
          type="text"
          placeholder="eg. test@test.com"
          className="input input--large"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.button
        className="transform rotate-[-45deg] border-white text-white border rounded-full w-20 h-20 p-4 flex-shrink-0"
        initial={{ opacity: 0, translateX: 200, rotate: -45 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        title="Neem contact op"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.button>
    </form>
  );
}
