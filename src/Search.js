import { useState, useEffect, useRef } from "react";
import { callMovies } from "./api";

export default function Search() {
  const [movieResults, setMovieResults] = useState();

  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const movieId = urlObj.searchParams.get("query");

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieId}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await callMovies(api, true);
      setMovieResults(data); // Update the state with the fetched data
    };

    const fetchID = setTimeout(fetchData, 500);

    return () => clearTimeout(fetchID);
  }, [api]);

  console.log(movieResults);
}
