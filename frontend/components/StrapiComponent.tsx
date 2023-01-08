import { ReactElement, useMemo } from "react";
import Services from "./Services";
import Hero from "./Hero";
import Projects from "./Sections/Projects";
import Markdown from "./Sections/Markdown";
import PageHeader from "./Sections/PageHeader";
import { ISection } from "../lib/interfaces/components/sections";
import Divider from "./Sections/Divider";

const components: any = {
  "sections.services": Services,
  "sections.hero": Hero,
  "sections.projects": Projects,
  "sections.markdown": Markdown,
  "sections.page-header": PageHeader,
  "sections.divider": Divider,
};

export declare type StrapiComponentProps = {
  component: ISection;
};

export default function StrapiComponent(
  props: StrapiComponentProps
): ReactElement | null {
  const attributes = props.component;

  const Component = useMemo(() => {
    return components[attributes.__component];
  }, [attributes.__component]);

  if (!Component) {
    return null;
  }

  return (
    <div>
      <Component component={attributes} />
    </div>
  );
}
