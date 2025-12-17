import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto pt-6">
      <p>LOGO</p>

      <nav className="space-x-2">
        <Link
          className="px-4 py-1.5 border-b-2 border-transparent hover:border-b-indigo-500 transition duration-150 ease-in hover:bg-linear-to-t from-indigo-500/55  to-slate-950 focus-visible:border-b-indigo-500 focus-visible:bg-linear-to-t focus-visible:from-indigo-500 focus-visible:to-slate-950 focus-visible:outline-none"
          href="/anime"
        >
          Anime
        </Link>
        <Link
          className="px-4 py-1.5 border-b-2 border-transparent hover:border-b-indigo-500 transition duration-150 ease-in hover:bg-linear-to-t from-indigo-500/55  to-slate-950 focus-visible:border-b-indigo-500 focus-visible:bg-linear-to-t focus-visible:from-indigo-500 focus-visible:to-slate-950 focus-visible:outline-none"
          href="/movie"
        >
          Movie
        </Link>
        <Link
          className="px-4 py-1.5 border-b-2 border-transparent hover:border-b-indigo-500 transition duration-150 ease-in hover:bg-linear-to-t from-indigo-500/55  to-slate-950 focus-visible:border-b-indigo-500 focus-visible:bg-linear-to-t focus-visible:from-indigo-500 focus-visible:to-slate-950 focus-visible:outline-none"
          href="/tv"
        >
          Tv
        </Link>
        <Link
          className="px-4 py-1.5 border-b-2 border-transparent hover:border-b-indigo-500 transition duration-150 ease-in hover:bg-linear-to-t from-indigo-500/55  to-slate-950 focus-visible:border-b-indigo-500 focus-visible:bg-linear-to-t focus-visible:from-indigo-500 focus-visible:to-slate-950 focus-visible:outline-none"
          href="/manga"
        >
          Manga
        </Link>
      </nav>

      <div className="relative ">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-6 -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          name="query"
          id="search"
          placeholder="Search anime, movies"
          className=" bg-gray-800 pl-10 pr-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </header>
  );
}
