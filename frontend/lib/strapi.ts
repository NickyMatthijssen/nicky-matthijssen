import axios, { Axios } from "axios";
import { ICollection, IModelWrapper } from "./interfaces/strapi";

interface StrapiInterface {
  url: string;
  token: string;
  fetch: Axios;
}

class Strapi implements StrapiInterface {
  url: string;
  token: string;
  fetch: Axios;

  constructor(url: string, token: string, prefix: string = "api") {
    this.url = url;
    this.token = token;

    this.fetch = axios.create({
      baseURL: this.url + "/" + prefix + "/",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async find<T>(
    collection: string,
    id: number,
    query?: string
  ): Promise<IModelWrapper<T>> {
    const { data } = await this.fetch.get(`${collection}/${id}?${query}`);

    return data as IModelWrapper<T>;
  }

  async findSingle<T>(type: string, query?: string): Promise<T> {
    const {
      data: {
        data: { attributes },
      },
    } = await this.fetch.get(`${type}?${query}`);

    return attributes as T;
  }

  async findBySlug<T>(
    single: string,
    slug: string,
    query: string = ""
  ): Promise<T | null> {
    try {
      let {
        data: { data },
      } = await this.fetch.get(`/slugify/slugs/${single}/${slug}?${query}`);

      return data as T;
    } catch (e) {
      return null;
    }
  }

  async findPaginated<T>(
    collection: string,
    query: string,
    page: number = 1
  ): Promise<ICollection<T>> {
    const { data } = await this.fetch.get<ICollection<T>>(
      collection + "?" + query
    );

    return data as ICollection<T>;
  }
}

export default Strapi;
