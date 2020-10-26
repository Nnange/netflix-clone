const API_KEY = "c38fc1cdb249129469c112914a85813a";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languauge=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with-networks=213`,
    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
    fetchCocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
};

export default requests;
