import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Row.css'
function Row({title,fetchUrl,isLargeRow = false}) {
    const [movies,setMovies]=useState([])
    const base_url="https://image.tmdb.org/t/p/original"
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData();

    },[fetchUrl]);

    console.log("Movies in "+title+" ")
    
    return (
        <div className='row'>
            <h2 className='row_title'>{title}</h2>
          <div className="row_posters">
            {movies.map(movie=>(
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))  &&(
               <div>
                <img className={`row_poster  ${isLargeRow && 'row_poster_large'}`}
                key={movie.id}
                src={`
                ${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}
                `} alt={movie.name} />
                {/* <h3>{movie.name}</h3> */}
               </div>
                )
              
                
                )
               
            )}
           

</div>
        </div>
    );
}

export default Row;