import React from 'react'
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {

  const{data:genreData} = useMovieGenreQuery()

  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList=genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList
  }
  return (
    <div className="movie-card"
        style={{
        backgroundImage:
        "url("+
        `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+
        ")",
        }}>
        <div className="overlay">
            <h2>{movie.title}</h2>
            <div>
              {showGenre(movie.genre_ids).map
              ((id)=><Badge className="genre-badge" bg="danger">{id}</Badge>)}
            </div>
            <div>
                <div><FontAwesomeIcon className="genre-badge"/>⭐️ {movie.vote_average.toFixed(1)}</div>
                <div><FontAwesomeIcon className="genre-badge"/>👨‍👩‍👧‍👦 {movie.popularity.toFixed(0)}</div>
                <div>{movie.adult?'over18':'under18'}</div>
            </div>
        </div>

    </div>
  )
}

export default MovieCard