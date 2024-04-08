import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide'


//배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//popular movie
//top rated movie
//upcoming movie
const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide/>
      <UpComingMovieSlide/>
    </div>
  )
}

export default HomePage