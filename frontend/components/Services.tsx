"use client";

import { motion } from "framer-motion";
import { IServiceCard } from "../lib/interfaces/components";
import { IServices } from "../lib/interfaces/components/sections";
import ServiceCard from "./Components/ServiceCard";
import Slider from "./Slider";

export declare type ServicesProps = {
  component: IServices;
};

export default function Services(props: ServicesProps) {
  const {
    component: { title, experience, caption, services, brands },
  } = props;

  return (
    <section>
      <div className="bg-rose-900 pb-40 lg:pb-16">
        <div className="container py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Slider component={brands} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 container">
          <div>
            <motion.span
              className="text-8xl text-white font-bold block mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {experience}
            </motion.span>
            <motion.p
              className="text-xl max-w-[20px] font-semibold text-white"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              {caption}
            </motion.p>
          </div>

          <div className="lg:col-span-3">
            <motion.h2
              className="text-rose-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 container relative -top-40 lg:-top-32">
          <div />

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service: IServiceCard, index: number) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 1) * 0.25 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
