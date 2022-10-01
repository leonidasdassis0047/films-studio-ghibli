import { Link } from "@remix-run/react";
import type { FilmCharacter } from "~/apis/films";

type CharacterListProps = {
  characters: FilmCharacter[];
};

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="flex-1 max-w-md">
      <ul className="flex flex-col space-y-3 my-3">
        {characters?.map((character) => (
          <li key={character.id}>
            <Link
              to={`characters/${character.id}`}
              prefetch="intent"
              reloadDocument={false}
              className="w-full hover:underline p-3 rounded border border-slate-400 inline-block"
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
