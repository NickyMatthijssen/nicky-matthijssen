import StrapiComponent from "./StrapiComponent";

type strapiDynamicZone = {
  sections: Array<any>;
};

export default function StrapiDynamicZone(props: strapiDynamicZone) {
  const { sections } = props;

  return (
    <>
      {sections.map((section: any, index: number) => (
        <StrapiComponent component={section} key={index} />
      ))}
    </>
  );
}
