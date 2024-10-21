const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const fetchRequest = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const queryParams = new URLSearchParams({api_key: API_KEY, ...params})
  const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const getCategories = () => fetchRequest('genre/movie/list')
export const getMoviesFromCategory = (id: number) =>
  fetchRequest('discover/movie', {with_genres: id.toString()})
