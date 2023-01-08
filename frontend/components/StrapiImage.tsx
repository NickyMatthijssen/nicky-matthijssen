import Image, { ImageProps as NextImageProps } from "next/image";
import { IImage } from "../lib/interfaces/strapi";

declare type ImageProps = Omit<NextImageProps, "src" | "alt"> & {
  image?: IImage;
  replacement?: string;
};

export default function StrapiImage({
  image,
  replacement = "/placeholder.png",
  ...props
}: ImageProps) {
  if (!image) {
    return (
      <Image src={replacement} alt="Geen afbeelding gevonden" {...props} />
    );
  }

  return (
    <Image
      {...props}
      src={process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.url}
      alt={image.attributes.alternativeText ?? " "}
    />
  );
}
