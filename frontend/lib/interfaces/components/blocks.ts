import { IDataArrayWrapper, IImage } from "../strapi";

export interface IService {
  title: string;
  description: string;
}

export interface ISlider {
  id: number;
  images: IDataArrayWrapper<IImage>;
}
