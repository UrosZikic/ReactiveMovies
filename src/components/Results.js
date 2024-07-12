export default function Results({ pageValue, movieResults }) {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w400";
  const totalPages = movieResults
    ? movieResults.total_pages < 500
      ? movieResults.total_pages
      : 500
    : 500;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {parseInt(pageValue) < 1 && <h1>No Movies Found :\</h1>}
      {parseInt(pageValue) > totalPages && <h1>No Movies Found :\</h1>}

      {movieResults
        ? movieResults.results.map((item, index) => (
            <a key={index} href={`/movie?movie=${item.id}`}>
              <img
                src={
                  baseUrl +
                  imageSize +
                  (item.backdrop_path ? item.backdrop_path : item.poster_path)
                }
                style={{
                  height: "225px",
                  width: "400px",
                  objectFit: "cover",
                }}
                alt={item.original_title}
              />
              <p>{item.original_title}</p>
            </a>
          ))
        : false}
    </div>
  );
}
