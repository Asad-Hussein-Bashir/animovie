"use client";
import useSWR from "swr";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Poster } from "./Poster";
import { TabSkeleton } from "./TabSkeleton";
import { Suspense } from "react";

export function TrendingTab() {
  return (
    <div className="">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            <Tab className="transition px-3 py-1  text-lg font-semibold text-slate-400 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:text-white border border-transparent data-selected:border-b-indigo-500">
              Anime
            </Tab>
            <Tab className="transition  px-3 py-1 text-lg  font-semibold text-slate-400 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:text-white border border-transparent data-selected:border-b-indigo-500">
              Movie
            </Tab>
            <Tab className="transition  px-3 py-1 text-lg ont-semibold text-slate-400 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:text-white border border-transparent data-selected:border-b-indigo-500">
              Tv
            </Tab>
            <Tab className="transition  px-3 py-1 text-lg  font-semibold text-slate-400 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:text-white border border-transparent data-selected:border-b-indigo-500">
              Manga
            </Tab>
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel>
              <AnimeTab />
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>tv</TabPanel>
            <TabPanel>manga</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

function AnimeTab() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://api.jikan.moe/v4/top/anime?type=tv&limit=5&filter=airing",
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <TabSkeleton />;
  return (
    <div className="flex gap-12">
      {data.data.map((anime) => (
        <div key={anime.mal_id} className="">
          <Poster key={anime.mal_id} url={anime.images.webp.large_image_url} />
          <p className="text-xl">{anime.titles[0].title}</p>
        </div>
      ))}
    </div>
  );
}
