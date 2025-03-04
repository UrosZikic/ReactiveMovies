export default function Pagination({ pageValue, movieResults, movieId }) {
  const curUrl = window.location.href;
  const urlObj = new URL(curUrl);
  const pageId = urlObj.searchParams.get("page");
  const currentPage = parseInt(pageId);

  const totalPages = movieResults
    ? movieResults.total_pages < 500
      ? movieResults.total_pages
      : 500
    : 500;

  let paginateValid = false;

  if (currentPage >= 1 || currentPage <= totalPages) {
    paginateValid = "block";
  }

  let displayPages = !currentPage
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
  if (currentPage >= totalPages - 2) {
    displayPages = [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }
  if (totalPages <= 5) {
    displayPages = [];
    for (let i = 1; i <= totalPages; i++) displayPages.push(i);
  }
  console.log(currentPage);
  return (
    <div style={{ display: paginateValid && paginateValid }}>
      {displayPages.map((item, i) => (
        <a
          style={{ color: currentPage === item && "red" }}
          href={
            `http://localhost:3000${
              movieId ? `/search?query=${movieId}&` : "?"
            }page=` + item
          }
          key={i}
        >
          {item}
        </a>
      ))}
    </div>
  );
}
