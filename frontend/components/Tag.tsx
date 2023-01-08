import { ITag } from "../lib/interfaces/collections";
import StrapiImage from "./StrapiImage";

export declare type TagProps = {
  tag: ITag;
};

export default function Tag(props: TagProps) {
  const { tag } = props;

  return (
    <span className="py-1 text-white font-medium flex items-center mr-5">
      {!!tag.attributes.logo.data && (
        <StrapiImage
          width={16}
          height={16}
          image={tag.attributes.logo.data}
          className="mr-3 object-contain"
        />
      )}
      {tag.attributes.name}
    </span>
  );
}
