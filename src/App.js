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
  const [browseResults, setBrowseResults] = useState();

  // api
  const apiKey = "245d71936de55c199391618d2d244f64";
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const pageValue = urlObj.searchParams.get("page");

  async function callMovies(url, validate) {
    const api = url
      ? url
      : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${
          pageValue ? pageValue : 1
        }`;
    await fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error 404");
        }
        return res.json();
      })
      .then((data) => {
        const retrieveData = data;
        if (!validate) setMovieResults(retrieveData);
        else {
          setBrowseResults(retrieveData);
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    callMovies();
  }, []);

  //
  return (
    <>
      <Nav
        callMovies={callMovies}
        apiKey={apiKey}
        movieResults={movieResults}
        browseResults={browseResults}
      />
      <Results pageValue={pageValue} movieResults={movieResults} />
      <Pagination pageValue={pageValue} movieResults={movieResults} />
    </>
  );
}

export default App;
