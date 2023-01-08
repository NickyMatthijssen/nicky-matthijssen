import projects from "../../../lib/api/projects";

export default async function ProjectHead({
  params: { slug },
}: any): Promise<React.ReactNode> {
  const project = await projects.getProject(slug);

  if (!project) {
    return null;
  }

  const {
    attributes: { title },
  } = project;

  return (
    <>
      <title>{title}</title>
    </>
  );
}
