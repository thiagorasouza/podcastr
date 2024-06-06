"use client";

import Image from "next/image";
import React from "react";
import { manrope } from "./fonts";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Home = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full">
      <aside className="left_sidebar">
        <header className="flex gap-2 items-center mb-12">
          <Image src="/icons/logo.svg" alt="logo" width={28} height={28} />
          <h1 className={cn(manrope.className, "text-24 font-extrabold")}>
            Podcastr
          </h1>
        </header>
        <nav>
          <ul className="flex flex-col gap-4 text-white-2 text-16">
            {sidebarLinks.map(({ label, route, imgURL }) => {
              const isActive = route === pathname;
              return (
                <li
                  key={route}
                  className={cn("flex items-center py-3", {
                    "bg-nav-focus border-r-4 border-r-orange-1 text-white-1":
                      isActive,
                  })}
                >
                  <Image
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                    className={cn("mr-4")}
                  />
                  <Link href={route}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">Main</main>
      <aside className="right_sidebar">Right</aside>
    </div>
  );
};

export default Home;
