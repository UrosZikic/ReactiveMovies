import { useState, useEffect, useRef } from "react";
import { callMovies } from "./api";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Pagination from "./components/Pagination";

export default function Search() {
  const [movieResults, setMovieResults] = useState();
  const [browseResults, setBrowseResults] = useState();

  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const movieId = urlObj.searchParams.get("query");
  const pageId = urlObj.searchParams.get("page");

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieId}${
    pageId && `&page=${pageId > 1 ? pageId : 1}`
  }`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await callMovies(api, true);
      setMovieResults(data); // Update the state with the fetched data
    };

    const fetchID = setTimeout(fetchData, 500);

    return () => clearTimeout(fetchID);
  }, [api]);

  console.log(movieResults && movieResults.total_pages);

  return (
    <>
      <Nav
        callMovies={callMovies}
        apiKey={apiKey}
        movieResults={movieResults}
        browseResults={browseResults}
      />
      <MovieResults
        pageValue={movieResults && movieResults.total_pages}
        movieResults={movieResults}
        movieId={movieId}
      />
    </>
  );
}

function MovieResults({ pageValue, movieResults, movieId }) {
  return (
    <main>
      <Results
        pageValue={pageValue}
        movieResults={movieResults}
        movieId={movieId}
      />
      <Pagination
        pageValue={pageValue}
        movieResults={movieResults}
        movieId={movieId}
      />
    </main>
  );
}
