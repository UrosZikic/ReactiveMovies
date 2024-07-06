export default function Pagination({ pageValue, movieResults }) {
  const totalPages = movieResults && console.log(movieResults.total_pages);
  const currentPage = pageValue && parseInt(pageValue);
  const displayPages = !currentPage
    ? [1, 2, 3, 4, 5]
    : currentPage <= 2
    ? [1, 2, 3, 4, 5]
    : [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];

  return (
    <div>
      {/* <a href="http://localhost:3000?page=1">page</a> */}
      {/* {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
        <a href={"http://localhost:3000?page=" + num} key={num}>
          {num}
        </a>
      ))} */}
      {displayPages.map((item, i) => (
        <a href={"http://localhost:3000?page=" + item} key={i}>
          {item}
        </a>
      ))}
    </div>
  );
}
