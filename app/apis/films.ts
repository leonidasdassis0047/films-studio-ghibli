export type FilmCharacter = {
  id: string;
  gender: string;
  name: string;
  age?: string;
  eye_color?: string;
  hair_color?: string;
};

export type Film = {
  id: string;
  title: string;
  description: string;
  original_title: string;
  image: string;
  movie_banner: string;
  people: string[];
  characters: Array<FilmCharacter>;
};

const RESOURCE_ROUTE = "https://ghibliapi.herokuapp.com/films/";

export const getFilms = async (title?: string | null) => {
  const response = await fetch(RESOURCE_ROUTE);
  const films: Film[] = await response.json();
  return films.filter((film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  );
};

export const getFilm = async (filmId: string): Promise<Film> => {
  const response = await fetch(`${RESOURCE_ROUTE}/${filmId}`);
  const film: Film = await response.json();

  const charactersResponse = film.people
    .filter((url) => url !== "https://ghibliapi.herokuapp.com/people")
    .map((url) => fetch(url).then((res) => res.json()));

  const characters = await Promise.all([...charactersResponse]);
  return { ...film, characters };
};

export const getCharacter = async (
  characterId: string
): Promise<FilmCharacter> => {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/people/${characterId}`
  );
  const character: FilmCharacter = await response.json();
  return character;
};
