import { IServiceCard } from ".";
import { IProject } from "../collections";
import { IDataArrayWrapper, IDataWrapper, IImage } from "../strapi";
import { ISlider } from "./blocks";
import { ILink } from "./elements";

export interface ISection {
  __component: string;
}

export interface IHero extends ISection {
  title: string;
  description: string;
  button: ILink;
}

export interface IContact extends ISection {
  title: string;
}

export interface IRecentWork extends ISection {
  title: string;
  description: string;
  projects: IDataArrayWrapper<IProject>;
  button: ILink;
}

export interface IServices extends ISection {
  title: string;
  experience: string;
  caption: string;
  services: Array<IServiceCard>;
  brands: ISlider;
}

export interface IProjects extends ISection {
  title: string;
  link: ILink;
  projects: IDataArrayWrapper<IProject>;
}

export interface IMarkdown extends ISection {
  content?: string | null;
}

export interface IPageHeader extends ISection {
  title: string;
  background: IDataWrapper<IImage>;
}

export interface IDivider extends ISection {
  spacing: number;
}
