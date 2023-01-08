import { IProject } from "../interfaces/collections";
import { ICollection } from "../interfaces/strapi";
import client from "./client";
import { default as qs } from "qs";

export async function getProject(slug: string): Promise<IProject> {
  const project = await client.findBySlug<IProject>(
    "project",
    slug,
    qs.stringify({
      populate: "gallery.images, tags.logo, url",
    })
  );

  return project as IProject;
}

export async function getProjects(
  page: number = 1
): Promise<ICollection<IProject>> {
  const response = await client.findPaginated<IProject>(
    "projects",
    qs.stringify({
      populate: "gallery.images",
      pagination: {
        page,
        pageSize: 10,
      },
    }),
    page
  );

  return response;
}

const projects = {
  getProject,
  getProjects,
};

export default projects;
