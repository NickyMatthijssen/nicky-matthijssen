"use client";

import { ReactElement, useMemo } from "react";
import useGlobals from "../../hooks/useGlobals";
import FooterColumn from "./FooterColumn";
import StrapiImage from "../StrapiImage";

export default function Footer(): ReactElement | null {
  const globals = useGlobals();

  if (!globals) {
    return null;
  }

  const columns = [...globals?.footer?.columns].reverse();

  return (
    <div className="text-sm">
      <div className="container">
        <div className="py-20">
          <div className="mb-8">
            <StrapiImage
              image={globals.footer.logo.data}
              width={220}
              height={100}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm">{globals.footer.about}</p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-3 grid-reverse text-end">
              {columns.map((column: any) => (
                <FooterColumn column={column} key={column.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 text-center py-6">
          <span>{globals.footer.copyright}</span>
        </div>
      </div>
    </div>
  );
}
