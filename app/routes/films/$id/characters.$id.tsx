import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { FilmCharacter } from "~/apis/films";
import { getCharacter } from "~/apis/films";

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected character id");
  return await getCharacter(params.id);
};

export default function Character() {
  const character = useLoaderData<FilmCharacter>();

  return (
    <div className="w-full h-full bg-white shadow-slate-400">
      <p className="text-2xl">Name: {character.name}</p>
      <p className="text-2xl">Gender: {character.gender}</p>
      <p className="text-2xl">Age: {character.age}</p>
    </div>
  );
}
