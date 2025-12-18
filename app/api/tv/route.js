import { TMDB_OPTIONS, TMDB_BASE_URL } from "@/app/lib/const";

export async function GET() {
  const url = `${TMDB_BASE_URL}trending/tv/week`;

  const res = await fetch(url, TMDB_OPTIONS);

  const data = await res.json();

  return Response.json(data);
}
