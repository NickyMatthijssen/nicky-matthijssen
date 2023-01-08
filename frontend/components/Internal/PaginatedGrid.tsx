"use client";

import { useMemo, useState } from "react";

export default function PaginatedGrid(props: any) {
  const {
    serverData,
    defaultMeta,
    loadingMethod,
    gridComponent: GridComponent,
    dataField = "data",
  } = props;

  const [data, setData] = useState(serverData);
  const [meta, setMeta] = useState(defaultMeta);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hasMorePages = useMemo(
    () => meta.pagination.pageCount > meta.pagination.page,
    [meta]
  );

  const loadMore = async () => {
    setIsLoading(true);

    const { data: fetechedData, meta: fetchedMeta } = await loadingMethod(
      meta.pagination.page + 1
    );

    setData((data: any) => [...data, ...fetechedData]);
    setMeta(fetchedMeta);

    setIsLoading(false);
  };

  const gridProps = useMemo(() => ({ [dataField]: data }), [dataField, data]);

  return (
    <div>
      <GridComponent {...gridProps} />

      {hasMorePages && (
        <div className="mt-8 text-center">
          <button
            className="btn btn--primary"
            onClick={loadMore}
            disabled={isLoading}
          >
            Meer laden...
          </button>
        </div>
      )}
    </div>
  );
}
