import { IFooter, INavigation } from "../components/global";
import { IContact } from "../components/sections";
import { ISeo } from "../components/shared";

export interface IGlobal {
  navigation: INavigation;
  footer: IFooter;
  contact: IContact;
}

export interface IPortfolio {
  content: string;
  meta: ISeo;
}
