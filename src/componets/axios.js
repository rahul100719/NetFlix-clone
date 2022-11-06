import axios from 'axios'


// const baseUrl='https://api.themoviedb.org/3/movie/550?api_key=24b3591c8cf316bddde575b2331c02fa'

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default instance