"use client";
import useSWR from "swr";
import { TabSkeleton } from "./TabSkeleton";
import { Poster } from "./Poster";
export function AnimeTab() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("api/anime", fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <TabSkeleton />;
  return (
    <div className="flex gap-12">
      {data.data.map((anime) => (
        <div key={anime.mal_id} className="">
          <Poster url={anime.images.webp.large_image_url} />
          <p className="text-xl">{anime.titles[0].title}</p>
        </div>
      ))}
    </div>
  );
}
