"use client";

import { motion } from "framer-motion";
import { IProjects } from "../../lib/interfaces/components/sections";
import ProjectGrid from "../Internal/ProjectGrid";
import Link from "../Link";

export declare type ProjectsProps = {
  component: IProjects;
};

export default function Projects(props: ProjectsProps) {
  const {
    component: {
      title,
      projects: { data: projects },
      link,
    },
  } = props;

  return (
    <div className="container py-24">
      <div className="mb-8 flex justify-between items-center">
        <motion.h2
          initial={{ translateX: 50, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link link={link} className="btn btn--secondary" />
        </motion.div>
      </div>

      <ProjectGrid projects={projects} inView />
    </div>
  );
}
