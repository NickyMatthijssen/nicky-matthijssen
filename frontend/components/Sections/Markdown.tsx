import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IMarkdown } from "../../lib/interfaces/components/sections";
import RichText from "../Internal/RichText";
import Divider from "./Divider";

export declare type MarkdownProps = {
  component: IMarkdown;
};

export default function Markdown(props: MarkdownProps): React.ReactNode {
  const {
    component: { content },
  } = props;

  if (!content) {
    return null;
  }

  return (
    <div className="container py-8 react-markdown react-markdown--white">
      <RichText content={content} />
    </div>
  );
}
