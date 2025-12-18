"use client";
import useSWR from "swr";
import { TabSkeleton } from "./TabSkeleton";
import { Poster } from "./Poster";

export function MovieTab() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("api/movie", fetcher);

  const results = data?.results ?? [];

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <TabSkeleton />;

  return (
    <div className="flex gap-12">
      {results.slice(0, 5).map((movie) => (
        <div key={movie.id}>
          <Poster
            url={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
          <p className="text-xl">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
