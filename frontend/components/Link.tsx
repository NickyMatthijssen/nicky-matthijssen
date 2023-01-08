import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { ReactElement } from "react";
import { ILink } from "../lib/interfaces/components/elements";

export declare type LinkProps = Omit<
  NextLinkProps,
  "children" | "href" | "title" | "target"
> & {
  link: ILink;
  className?: string;
};

export default function Link({
  link,
  ...props
}: LinkProps): ReactElement | null {
  if (!link || !link.href) {
    return null;
  }

  const linkProps = {
    ...props,
    href: link.href,
    title: link.label,
    target: link.target,
  };

  if (link.isExternal) {
    return <a {...linkProps}>{link.label}</a>;
  }

  return <NextLink {...linkProps}>{link.label}</NextLink>;
}
