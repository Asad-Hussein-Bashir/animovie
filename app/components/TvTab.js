"use client";
import useSWR from "swr";
import { TabSkeleton } from "./TabSkeleton";
import { Poster } from "./Poster";

export function TvTab() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("api/tv", fetcher);

  const results = data?.results ?? [];

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <TabSkeleton />;

  return (
    <div className="flex gap-12">
      {results.slice(0, 5).map((tv) => (
        <div key={tv.id}>
          <Poster
            url={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
          />
          <p className="text-xl">{tv.name}</p>
        </div>
      ))}
    </div>
  );
}
