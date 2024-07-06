export default function Results({ pageValue, movieResults }) {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w400";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {!parseInt(pageValue) ? <h1>No Movies Found :\</h1> : false}
      {movieResults
        ? movieResults.results.map((item, index) => (
            <div key={index}>
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
            </div>
          ))
        : false}
    </div>
  );
}
