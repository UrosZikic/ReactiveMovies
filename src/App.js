// import libraries
import { useState, useEffect, useRef } from "react";
// import css
import "./styles/App.css";
// component imports
import Nav from "./components/Nav";
import Results from "./components/Results";
import Pagination from "./components/Pagination";

function App() {
  const [movieResults, setMovieResults] = useState();
  // api
  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const pageValue = urlObj.searchParams.get("page");
  useEffect(() => {
    (async function () {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${pageValue}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("error 404");
          }
          return res.json();
        })
        .then((data) => {
          setMovieResults(data);
          console.log(data);
        })
        .catch((error) => console.error(error));
    })();
  }, [pageValue]);

  //
  return (
    <>
      <Nav />
      <Results pageValue={pageValue} movieResults={movieResults} />
      <Pagination pageValue={pageValue} movieResults={movieResults} />
    </>
  );
}

export default App;
