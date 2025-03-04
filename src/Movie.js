import { useState, useEffect, useRef } from "react";
import { callMovies } from "./api";

export default function Movie() {
  // api
  const [movieResults, setMovieResults] = useState();

  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const movieId = urlObj.searchParams.get("movie");

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await callMovies(api, true);
      setMovieResults(data); // Update the state with the fetched data
    };

    const fetchID = setTimeout(fetchData, 500);

    return () => clearTimeout(fetchID);
  }, [api]);

  console.log(movieResults);

  return (
    <>
      {movieResults && (
        <div>
          {/* <iframe
            src={"https://www.youtube.com/embed/" + movieResults.results[1].key}
            frameBorder="0"
            title={movieResults.results[0].name}
          ></iframe> */}
        </div>
      )}
    </>
  );
}
