import { IProject } from "../../lib/interfaces/collections";
import StrapiImage from "../StrapiImage";
import Link from "next/link";
import { useMemo } from "react";
import { IImage } from "../../lib/interfaces/strapi";

export type ProjectCartProps = {
  project: IProject;
};

export default function ProjectCard(props: ProjectCartProps) {
  const {
    project: {
      attributes: {
        title,
        slug,
        gallery: { data: images },
      },
    },
  } = props;

  const thumbnail: IImage | undefined = useMemo(
    () => (!!images && images.length > 0 ? images[0] : undefined),
    [images]
  );

  return (
    <Link
      href={`/portfolio/${slug}`}
      className="relative overflow-hidden rounded-lg group block h-full"
    >
      <StrapiImage
        priority
        image={thumbnail}
        width={400}
        height={400}
        className="h-full max-h-[400px] w-full object-cover group-hover:opacity-50 transition-all"
      />

      <div className="absolute -bottom-[100%] group-hover:bottom-0 left-0 w-full min-h-16 bg-rose-400 transition-all flex px-4 py-6 align-items-center">
        <span className="font-medium text-white text-lg">{title}</span>
      </div>
    </Link>
  );
}
