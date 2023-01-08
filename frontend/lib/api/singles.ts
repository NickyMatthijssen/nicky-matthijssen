import QueryString from "qs";
import { IPortfolio } from "../interfaces/singles";
import client from "./client";

const singles = {
  async getPortfolio(): Promise<IPortfolio> {
    const data = await client.findSingle<IPortfolio>(
      "portfolio",
      QueryString.stringify({
        populate: "meta, meta.metaImage, meta.metaSocial",
      })
    );

    return data;
  },
};

export default singles;
