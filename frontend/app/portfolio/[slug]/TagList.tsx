import { ReactElement } from "react";
import Tag from "../../../components/Tag";
import { ITag } from "../../../lib/interfaces/collections";

export declare type TagListProps = {
  tags: Array<ITag>;
};

export default function TagList(props: TagListProps): ReactElement {
  const { tags } = props;

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.id} />
      ))}
    </div>
  );
}
