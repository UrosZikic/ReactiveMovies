import Browser from "./Browser";
export default function Nav({
  callMovies,
  apiKey,
  movieResults,
  browseResults,
}) {
  return (
    <nav>
      <Browser
        callMovies={callMovies}
        apiKey={apiKey}
        movieResults={movieResults}
        browseResults={browseResults}
      />
    </nav>
  );
}
