"use client";
export function Poster({ url }) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`w-48 h-72 bg-cover bg-no-repeat bg-center`}
    ></div>
  );
}
