import { notFound } from "next/navigation";
import Head from "../../components/Internal/Head";
import singles from "../../lib/api/singles";

export default async function PortfolioHead() {
  const portfolio = await singles.getPortfolio();

  if (!portfolio) return notFound();

  return (
    <>
      <Head meta={portfolio.meta} />
    </>
  );
}
