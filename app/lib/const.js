export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/";

export const JIKAN_BASE_URL = "https://api.jikan.moe/v4/";
