import { IPage } from "../collections";
import { IDataWrapper } from "../strapi";
import { IImage } from "../strapi";

export interface IServiceCard {
  id: number;
  service: string;
  icon: IDataWrapper<IImage>;
  page: IDataWrapper<IPage>;
}
