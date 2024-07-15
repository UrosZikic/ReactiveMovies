// import libraries
import { useState, useEffect, useRef } from "react";

// import css
import "./styles/App.css";
// component imports
import { callMovies } from "./api";
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
  useEffect(() => {
    const fetchData = async () => {
      const data = await callMovies();
      setMovieResults(data); // Update the state with the fetched data
    };

    const fetchID = setTimeout(fetchData, 500);

    return () => clearTimeout(fetchID);
  }, []);

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
