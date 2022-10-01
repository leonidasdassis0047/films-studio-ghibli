import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import React from "react";
import invariant from "tiny-invariant";
import type { Film } from "~/apis/films";
import { getFilm } from "~/apis/films";
import CharacterList from "~/components/CharacterList";
import FilmBanner from "~/components/FilmBanner";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected params.id");
  const film = await getFilm(params.id);
  return film;
};

export const meta: MetaFunction = ({ data }) => ({
  title: `Films | ${data.title}`,
});

export default function FilmDetails() {
  const film = useLoaderData<Film>();
  return (
    <div className="">
      <FilmBanner film={film} />

      <div className="p-8">
        <p className="font-medium" style={{ fontSize: "1.2rem" }}>
          {film.description}
        </p>

        <h3 className="text-3xl text-blue-800 my-2">Characters</h3>
        <div className="pb-5 flex space-x-5">
          <CharacterList characters={film.characters} />

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
