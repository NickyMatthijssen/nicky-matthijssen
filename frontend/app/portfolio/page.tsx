import { notFound } from "next/navigation";
import RichText from "../../components/Internal/RichText";
import { getProjects } from "../../lib/api/projects";
import singles from "../../lib/api/singles";
import PortfolioPagination from "./PortfolioPagination";

export default async function Page() {
  const portfolio = await singles.getPortfolio();

  if (!portfolio) return notFound();

  let { data: projects, meta } = await getProjects();

  return (
    <div className="pt-32 container">
      <div className="mb-16">
        <RichText content={portfolio.content} />
      </div>

      <PortfolioPagination projects={projects} meta={meta} />
    </div>
  );
}
