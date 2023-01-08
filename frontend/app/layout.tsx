import Navigation from "../components/Navigation";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import globals from "../lib/api/globals";
import GlobalsContext from "../components/GlobalsContext";
import "swiper/swiper-bundle.css";
import Contact from "../components/Contact";

export const revalidate = 3600; // revalidate every hour

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await globals.get();

  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GlobalsContext globals={data}>
          <Navigation />
          {children}
          <Contact />
          <Footer />
        </GlobalsContext>
      </body>
    </html>
  );
}
