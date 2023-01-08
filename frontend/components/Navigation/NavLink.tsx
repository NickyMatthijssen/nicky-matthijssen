import { ReactElement } from "react";
import Link, { LinkProps } from "../Link";

export declare type NavLinkProps = Omit<LinkProps, "className">;

export default function NavLink(props: NavLinkProps): ReactElement {
  const { link } = props;

  return (
    <Link
      link={link}
      className="text-white font-medium hover:transform hover:scale-[1.1] transition-transform"
    />
  );
}
