import FooterLink from "./FooterLink";
import FooterLinks from "./FooterLinks";

type FooterColumnType = {
  column: any;
};

export default function FooterColumn({ column }: FooterColumnType) {
  return (
    <FooterLinks>
      {column.links.map((link: any) => (
        <FooterLink link={link} key={link.id} />
      ))}
    </FooterLinks>
  );
}
