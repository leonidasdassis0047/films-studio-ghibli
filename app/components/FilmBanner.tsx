import { Link } from "@remix-run/react";
import type { Film } from "~/apis/films";

type Props = {
  film: Film;
};

export default function FilmBanner({ film }: Props) {
  return (
    <div className="w-full h-96 overflow-hidden relative">
      <div className="w-full h-full flex flex-col absolute justify-between items-start">
        <Link to={"/films"} className="p-5 font-bold text-white">
          Go Back
        </Link>
        <div className="bg-slate-700/60 p-5">
          <div className="text-6xl font-bold text-white">{film.title}</div>
        </div>
      </div>

      <img
        src={film.movie_banner}
        alt={film.title}
        style={{ marginTop: -100 }}
        className="w-full h-auto"
      />
    </div>
  );
}
