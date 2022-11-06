const API_KEY='24b3591c8cf316bddde575b2331c02fa'

const requests={
    fetechTrending:`trending/all/week?api_key=${API_KEY}&language=en-IN`,
    fetechNetfixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetechTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-IN`,
    fetechActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetechComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetechHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetechRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetechDocumentries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests