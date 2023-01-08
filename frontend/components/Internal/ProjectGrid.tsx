"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { IProject } from "../../lib/interfaces/collections";
import ProjectCard from "./ProjectCard";

export declare type ProjectGridProps = {
  projects: Array<IProject>;
  inView?: boolean;
};

export default function ProjectGrid(
  props: ProjectGridProps
): React.ReactElement {
  const { projects = [], inView } = props;

  const [hasFinishedOnce, setHasFinishedOnce] = useState<boolean>(false);
  const [defaultPageSize] = useState<number>(projects.length);

  const onAnimationComplete = (index: number) => {
    if (!hasFinishedOnce && index + 1 === projects.length) {
      setHasFinishedOnce(true);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project: IProject, index: number) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={inView ? undefined : { scale: 1 }}
          whileInView={inView ? { scale: 1 } : undefined}
          transition={{
            delay:
              (hasFinishedOnce ? index + 1 - defaultPageSize : index) * 0.25,
          }}
          viewport={{ once: true }}
          onAnimationComplete={() => onAnimationComplete(index)}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
