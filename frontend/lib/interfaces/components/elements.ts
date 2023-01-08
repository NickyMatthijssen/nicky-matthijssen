import { LinkTarget } from "../../enums";

export interface ILink {
  label: string;
  href: string;
  target: LinkTarget;
  isExternal: boolean;
}

export interface ITag {
  tag: string;
}

export interface IFooterColumn {
  links: Array<ILink>;
}
