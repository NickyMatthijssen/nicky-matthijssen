import { default as qs } from "qs";
import { IPage } from "../interfaces/collections";
import client from "./client";

const pages = {
  async findAll(): Promise<Array<IPage>> {
    let { data: pages } = await client.findPaginated<IPage>("pages", "");

    return pages;
  },
  async findBySlug(slug: string = "home"): Promise<IPage | null> {
    let page = await client.findBySlug<IPage>(
      "page",
      slug,
      qs.stringify({
        populate: {
          sections: {
            populate: [
              "link",
              "button",
              "services.page",
              "services.icon",
              "projects.gallery",
              "brands.images",
              "pageHeader",
              "background",
              "divider",
              "MetaSocial",
            ],
          },
          meta: {
            populate: ["metaImage", "metaSocial.image"],
          },
        },
      })
    );

    return page;
  },
};

export default pages;
