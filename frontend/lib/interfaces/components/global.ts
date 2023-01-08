import { IDataWrapper, IImage } from "../strapi";
import { IFooterColumn, ILink } from "./elements";

export interface INavigation {
  id: number;
  links: Array<ILink>;
}

export interface IFooter {
  logo: IDataWrapper<IImage>;
  about: string;
  copyright: string;
  columns: Array<IFooterColumn>;
}
