const BASE_URL = "https://movied.herokuapp.com";

export const getDiscoverMovies = () => fetchRequest(`discover`);
export const getCategories = () => fetchRequest(`categories`);
export const getMoviesFromCategory = (id: string) => fetchRequest(`categories/${id}`);

const fetchRequest = async (url: string) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  return await response.json();
};