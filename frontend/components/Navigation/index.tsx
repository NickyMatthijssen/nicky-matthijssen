"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement, useContext, useEffect, useState } from "react";
import { ILink } from "../../lib/interfaces/components/elements";
import { Context } from "../GlobalsContext";
import NavLink from "./NavLink";

export default function Navigation(): ReactElement | null {
  const globals = useContext(Context);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.on("change", (percentage: number) =>
      setScrollPercentage(percentage)
    );

    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  if (!globals) {
    return null;
  }

  return (
    <div
      className={`w-full fixed z-50 border-b transition-colors ${
        scrollPercentage > 0
          ? "bg-neutral-900 border-neutral-900 shadow"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="py-6 container flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-rose-800 via-rose-600 to-rose-200"
        >
          Nickaayy
        </Link>

        <nav className="flex space-x-8">
          {globals.navigation.links.map((link: ILink, index: number) => (
            <NavLink link={link} key={index} />
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary">
          Contact
        </a>
      </div>
    </div>
  );
}
