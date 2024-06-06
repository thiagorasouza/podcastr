"use client";

import Image from "next/image";
import React from "react";
import { manrope } from "./fonts";
import { cn } from "@/lib/utils";
import { podcastData, sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Home = () => {
  const pathname = usePathname();

  return (
    <div className={cn("flex w-full", manrope.className)}>
      <aside className="left_sidebar min-h-screen justify-start">
        <header className="flex gap-2 items-center mb-14">
          <Image src="/icons/logo.svg" alt="logo" width={28} height={28} />
          <h1 className="text-24 font-extrabold">Podcastr</h1>
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
      <main className="flex-1 py-10 px-8">
        <section>
          <h2 className="text-20 font-bold mb-5">Trending Podcasts</h2>
          <div className="podcast_grid">
            {podcastData.map(({ id, title, description, imgURL }) => (
              <article key={id} className="flex flex-col">
                <Image
                  src={imgURL}
                  alt="podcast thumbnail"
                  width={174}
                  height={174}
                  className="mb-2 w-full aspect-square object-cover rounded-md"
                />
                <h3 className="text-16 font-bold">{title}</h3>
                <p className="text-12 capitalize">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <aside className="right_sidebar">Right</aside>
    </div>
  );
};

export default Home;
