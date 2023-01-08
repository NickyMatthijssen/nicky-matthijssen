import { notFound } from "next/navigation";
import { useMemo } from "react";
import Link from "../../../components/Link";
import projects, { getProjects } from "../../../lib/api/projects";
import ImageGallery from "./ImageGallery";
import TagList from "./TagList";

export async function generateStaticParams() {
  const { data } = await getProjects();

  return data.map((project) => ({ slug: project.attributes.slug }));
}

export default async function Page({ params: { slug } }: any) {
  const project = await projects.getProject(slug);

  if (!project) {
    return notFound();
  }

  const {
    attributes: { title, about, url, gallery, tags, deliveryDate },
  } = project;

  const formattedDate = new Date(deliveryDate ?? "").toLocaleDateString("nl");

  return (
    <div className="container">
      <section className="pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div>
          <ImageGallery gallery={gallery.data} />
        </div>

        <div>
          <h1 className="mb-8">{title}</h1>

          <table className="table table--portfolio">
            <tbody>
              <tr>
                <th>Technolgieën</th>
                <td>
                  <TagList tags={tags.data} />
                </td>
              </tr>
              {!!url && (
                <tr>
                  <th>Website</th>
                  <td>
                    <Link link={url} />
                  </td>
                </tr>
              )}
              {!!deliveryDate && (
                <tr>
                  <th>Opleveringsdatum</th>
                  <td>{formattedDate}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {!!about && (
        <section>
          <h2>Over het project</h2>

          <p>{about}</p>
        </section>
      )}
    </div>
  );
}
