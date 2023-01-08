import { ReactElement } from "react";
import Link, { LinkProps } from "../Link";

export default function FooterLink(props: LinkProps): ReactElement {
  const { link } = props;

  return (
    <li className="mb-4 text-sm text-gray-200 hover:underline">
      <Link link={link} />
    </li>
  );
}
