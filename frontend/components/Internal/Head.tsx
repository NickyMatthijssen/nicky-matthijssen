import { ISeo } from "../../lib/interfaces/components/shared";

export declare type HeadProps = {
  meta?: ISeo | null;
};

export default function Head(props: HeadProps): React.ReactElement | null {
  if (!props.meta) {
    return null;
  }

  const {
    meta: { metaTitle, metaDescription },
  } = props;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </>
  );
}
