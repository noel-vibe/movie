import React from 'react'
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
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
        }}
        onClick={() => navigate(`/movies/${movie.id}`)}
        >
        <div className="overlay">
            <h3>{movie.title}</h3>
            <div className="genre-badge">
              {showGenre(movie.genre_ids).map
              ((genre,index)=><Badge className="genre-badge" bg="danger" key={index}>{genre}</Badge>)}
            </div>
            <div>
                <div><FontAwesomeIcon icon={faStar} className="card-icon"/>{movie.vote_average.toFixed(1)}</div>
                <div><FontAwesomeIcon icon={faUsers} className="card-icon"/>{movie.popularity.toFixed(0)}</div>
                <div>{movie.adult?'over18':'under18'}</div>
            </div>
        </div>

    </div>
  )
}

export default MovieCard