import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { AnimeTab } from "./AnimeTab";
import { MovieTab } from "./MovieTab";
import { TvTab } from "./TvTab";
import { MangaTab } from "./MangaTab";
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
            <TabPanel>
              <MovieTab />
            </TabPanel>
            <TabPanel>
              <TvTab />
            </TabPanel>
            <TabPanel>
              <MangaTab />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
