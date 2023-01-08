import { IDataWrapper, IImage } from "../strapi";

export interface IMetaSocial {}

export interface ISeo {
  metaTitle: string;
  metaDescription: string;
  metaImage: IDataWrapper<IImage>;
  keywords?: string | null;
  metaRobots?: string | null;
  structuredData: object;
  metaViewport?: string | null;
  canonicalURL?: string | null;
}
