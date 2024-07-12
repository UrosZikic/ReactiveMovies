import { useState, useEffect } from "react";
import "../styles/output.css";

export default function BrowseRecommend({
  browseValue,
  callMovies,
  apiKey,
  browseResults,
}) {
  const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${browseValue}`;
  const [validate, setValidate] = useState(null);

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w400";

  useEffect(() => {
    if (browseValue) {
      const intervalId = setTimeout(() => {
        callMovies(searchMovies, true);
        setValidate(true);
      }, 500);

      return () => clearTimeout(intervalId);
    }
  }, [searchMovies, browseValue]);

  browseResults && console.log(browseResults);

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "-40px",
        right: "0",
        top: "10px",
        bottom: "0",
        backgroundColor: "white",
      }}
    >
      {browseResults &&
        browseValue.length > 3 &&
        browseResults.results.map(
          (item, id) =>
            id <= 4 && (
              <li
                key={item.original_title + id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "600px",
                }}
              >
                <img
                  style={{
                    height: "55px",
                    width: "100px",
                    objectFit: "contain",
                  }}
                  src={
                    baseUrl +
                    imageSize +
                    (item.backdrop_path ? item.backdrop_path : item.poster_path)
                  }
                  alt={item.original_title}
                />
                <p>{item.original_title}</p>
              </li>
            )
        )}
    </ul>
  );
}
