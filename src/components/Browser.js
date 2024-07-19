import { useState, useRef, useEffect } from "react";
import { callMovies } from "../api";
import BrowseRecommend from "./browseRecommend";

export default function Browser({ apiKey, movieResults, browseResults }) {
  const [browseValue, setBrowseValue] = useState(null);
  const inputRef = useRef();

  function change(e) {
    setBrowseValue(e.target.value);
  }

  useEffect(() => inputRef.current.focus(), []);
  return (
    <div
      style={{ position: "relative", height: "100%", backgroundColor: "white" }}
    >
      <input type="text" id="browser" onChange={change} ref={inputRef} />
      <a href={`/search?query=${browseValue}&page=1`}>search</a>
      <BrowseRecommend
        browseValue={browseValue}
        callMovies={callMovies}
        apiKey={apiKey}
        browseResults={browseResults}
      />
    </div>
  );
}
