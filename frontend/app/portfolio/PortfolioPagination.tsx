"use client";

import PaginatedGrid from "../../components/Internal/PaginatedGrid";
import ProjectGrid from "../../components/Internal/ProjectGrid";
import { getProjects } from "../../lib/api/projects";

export default function PortfolioPagination(props: any) {
  const { projects, meta } = props;

  return (
    <PaginatedGrid
      serverData={projects}
      defaultMeta={meta}
      loadingMethod={getProjects}
      gridComponent={ProjectGrid}
      dataField="projects"
    />
  );
}
