import { ILink } from "../components/elements";
import { ISeo } from "../components/shared";
import {
  IDataArrayWrapper,
  IDataWrapper,
  IImage,
  IModelWrapper,
} from "../strapi";

export interface IProject extends IModelWrapper<IProjectAttributes> {}

export interface IProjectAttributes {
  title: string;
  slug: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  publishedAt: string | Date;
  url?: ILink | null;
  deliveryDate?: string | Date | null;
  about?: string | null;
  gallery: IDataArrayWrapper<IImage>;
  tags: IDataArrayWrapper<ITag>;
}

export interface IPage extends IModelWrapper<IPageAttributes> {}

export interface IPageAttributes {
  title: string;
  slug: string;
  sections: Array<any>;
  meta: ISeo;
}

export interface ITag extends IModelWrapper<ITagAttributes> {}

export interface ITagAttributes {
  name: string;
  logo: IDataWrapper<IImage>;
}
