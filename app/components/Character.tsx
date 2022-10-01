import type { FilmCharacter } from "~/apis/films";

type CharacterProps = {
    character: FilmCharacter
}

export default function Character ({
character
}:CharacterProps){
return <div className="w-full h-full bg-white shadow-slate-400">
<p className="text-2xl">{character.name}</p>
</div>
}