const apiKey = "245d71936de55c199391618d2d244f64";

const curUrl = window.location.href;
const urlObj = new URL(curUrl);
const pageValue = urlObj.searchParams.get("page");

export async function callMovies(url, validate) {
  const api = url
    ? url
    : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${
        pageValue ? pageValue : 1
      }`;
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("error 404");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
