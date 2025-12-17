import { Header } from "./components/Header";
import { TabSkeleton } from "./components/TabSkeleton";
import { TrendingTab } from "./components/TrendingTab";

export default async function Home() {
  return (
    <main className="container mx-auto">
      <Header />

      <div className="mt-26 flex justify-between">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span
              className="
            bg-linear-to-r from-indigo-400 via-purple-500 to-indigo-700
            bg-clip-text text-transparent
            font-extrabold
            "
            >
              Discover
            </span>{" "}
            Trending entertainment. <br /> One place.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-400 max-w-[40ch]">
            Real-time trends from movies, TV shows, anime, and manga - updated
            daily.
          </p>
          <button
            className="
          mt-6
          inline-flex items-center justify-center gap-2
          rounded-xl
          bg-linear-to-r from-indigo-500 to-purple-600
          px-6 py-3
          text-base font-semibold text-white
          shadow-lg shadow-indigo-500/30
          transition-all duration-200


          hover:scale-[1.03]
          hover:shadow-xl hover:shadow-indigo-500/40


          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring_toggle-indigo-400
          focus-visible:ring-offset-2
          "
          >
            Explore
          </button>{" "}
          <TrendingTab />
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-52 h-52 bg-gray-800"></div>
          <div className="w-52 h-52 bg-gray-800"></div>
          <div className="w-52 h-52 bg-gray-800"></div>
          <div className="w-52 h-52 bg-gray-800"></div>
        </div>
      </div>
    </main>
  );
}
