import { useState, useEffect, useRef } from "react";

export default function Movie() {
  // api
  const [movieResults, setMovieResults] = useState();

  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const movieId = urlObj.searchParams.get("movie");

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";

  async function callMovies() {
    const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    await fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error 404");
        }
        return res.json();
      })
      .then((data) => {
        const retrieveData = data;
        setMovieResults(retrieveData);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    callMovies();
  }, []);

  return (
    <>
      {movieResults && (
        <div>
          <iframe src={movieResults.homepage} frameBorder="0"></iframe>
        </div>
      )}
    </>
  );
}
