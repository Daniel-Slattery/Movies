const BASE_URL = "https://movied.herokuapp.com";

export const getDiscoverMovies = () => fetchRequest(`discover`);
export const getCategories = () => fetchRequest(`categories`);
export const getMoviesFromCategory = (id) => fetchRequest(`categories/${id}`);

const fetchRequest = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  return await response.json();
};