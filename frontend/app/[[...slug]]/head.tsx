import { notFound } from "next/navigation";
import Head from "../../components/Internal/Head";
import pages from "../../lib/api/pages";

export default async function PageHead({ params: { slug } }: any) {
  const page = await pages.findBySlug(slug);

  if (!page) {
    notFound();
  }

  return <Head meta={page.attributes.meta} />;
}
