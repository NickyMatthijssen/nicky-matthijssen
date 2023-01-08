import Link from "next/link";
import { IServiceCard } from "../../lib/interfaces/components";
import StrapiImage from "../StrapiImage";

export declare type ServiceCardProps = {
  service: IServiceCard;
};

export default function ServiceCard(props: ServiceCardProps) {
  const {
    service: { service, icon, page },
  } = props;

  return (
    <Link
      href={page.data.attributes.slug}
      className="pt-36 bg-neutral-800 hover:bg-rose-500 p-4 pb-6 transition-all rounded-lg block"
      role="button"
    >
      <div className="h-[32px] mb-5 relative text-left">
        <StrapiImage
          image={icon.data}
          quality={80}
          fill
          className="!w-auto"
          sizes="32px"
        />
      </div>

      <span className="font-medium text-white pb-4">{service}</span>
    </Link>
  );
}
