import React,{useState} from "react";

import "./Banner.style.css"

const Banner = ({ movie }) => {

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
            ")",
        }}
        className="banner"
      >
        <div className="text-white banner-text-area px-5">
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>

        </div>
      </div>

    </>
  );
};

export default Banner;