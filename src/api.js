const apiKey = "245d71936de55c199391618d2d244f64";

const curUrl = window.location.href;
const urlObj = new URL(curUrl);
const pageValue = urlObj.searchParams.get("page");
const pageTarget = pageValue ? pageValue : 1;

export async function callMovies(url, validate) {
  const api = url
    ? url
    : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("error 404");
    }
    const data = await res.json();
    console.log(api, data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
