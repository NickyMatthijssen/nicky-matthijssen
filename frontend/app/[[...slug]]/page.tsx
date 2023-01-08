import { notFound } from "next/navigation";
import StrapiDynamicZone from "../../components/StrapiDynamicZone";
import pages from "../../lib/api/pages";

export async function generateStaticParams() {
  const data = await pages.findAll();

  return data.map((page) => {
    const slug = page.attributes.slug;

    return { slug: [slug === "home" ? "" : slug] };
  });
}

export default async function Page({ params: { slug } }: any) {
  const page = await pages.findBySlug(slug);

  if (!page) {
    notFound();
  }

  return <StrapiDynamicZone sections={page.attributes.sections} />;
}
