export interface ICollection<T> extends IDataArrayWrapper<T> {
  meta: IMeta;
}

export interface ISingle<T> extends IDataWrapper<T> {
  meta: IMeta;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IDataWrapper<T> {
  data: T;
}

export interface IDataArrayWrapper<T> {
  data: Array<T>;
}

export interface IComponentWrapper<T> {
  id: number;
  attributes: T;
}

export interface IModelWrapper<T> {
  id: number;
  attributes: T;
}

export interface IImage {
  id: number;
  attributes: IImageAttributes;
}

export interface IImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface IImageFormats {
  thumbnail: IImageFormat;
  small: IImageFormat;
  medium: IImageFormat;
  large: IImageFormat;
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}
