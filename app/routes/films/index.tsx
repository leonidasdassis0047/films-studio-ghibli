import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import type { Film } from "~/apis/films";
import { getFilms } from "~/apis/films";
import styles from "../../tailwind.css";

// SERVER LOADING
export const loader: LoaderFunction = async ({ request }) => {
  //   searching films
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search");

  //   fetch films
  const films = await getFilms(searchQuery as string);

  //   return data
  return { films };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({ title: "Films | Home" });

// CLIENT RENDERER
export default function Films() {
  const { films } = useLoaderData<{ films: Array<Film> }>();

  return (
    <div className="p-16">
      <h1 className="text-5xl text-center font-bold text-blue-800 mb-4">
        Studio Ghibli Films
      </h1>
      <Form reloadDocument action="" method="get" className="my-4 w-1/2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder={`Search films: ${films[0].title}`}
          className="p-2 border-blue-800 border-b-2 outline-none w-full"
        />
      </Form>

      <div className="grid grid-cols-4 gap-4">
        {films.map((film) => (
          <Link
            to={film.id}
            title={film.title}
            key={film.id}
            prefetch="intent"
            className="hover:shadow-2xl hover:scale-105 hover:font-semibold transition-all"
          >
            <h1>{film.title}</h1>
            <img src={film.image} alt={film.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
