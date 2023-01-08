import Strapi from "../strapi";

const client = new Strapi(
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "",
  process.env.NEXT_PUBLIC_STRAPI_API_KEY ?? ""
);

export default client;
