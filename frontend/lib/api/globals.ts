import QueryString from "qs";
import client from "./client";

const globals = {
  async get() {
    const data = await client.findSingle(
      "global",
      QueryString.stringify({
        populate: "navigation.links,footer.columns.links,footer.logo,contact",
      })
    );

    return data;
  },
};

export default globals;
