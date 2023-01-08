export declare type RichTextProps = {
  content: string;
};

export default function RichText(props: RichTextProps) {
  const { content } = props;

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
