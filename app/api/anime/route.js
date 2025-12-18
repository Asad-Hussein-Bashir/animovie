import { JIKAN_BASE_URL } from "@/app/lib/const";
export async function GET() {
  const url = `${JIKAN_BASE_URL}top/anime?type=tv&limit=5&filter=airing`;

  const res = await fetch(url);

  const data = await res.json();

  return Response.json(data);
}
