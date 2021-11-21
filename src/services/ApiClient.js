const BASE_URL = "https://movied.herokuapp.com";

export const getDiscoverMovies = () => fetchRequest(`discover`);
export const getCategories = () => fetchRequest(`categories`);
export const getMoviesFromCategory = (id) => fetchRequest(`categories/${id}`);

const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`);
    });
};
