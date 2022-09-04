// https://api.themoviedb.org/3/movie/550?api_key=b8dd0eeb6b9866c4e6a86cde52c3e52b
const API_KEY = "b8dd0eeb6b9866c4e6a86cde52c3e52b";
const request = {
  fecthTrending: `/trending/all/week?apikey=${API_KEY}&language=fr-FR`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComeduMovies: `/dicvover/movie?api_jkey=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumetaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;
