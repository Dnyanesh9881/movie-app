import React from "react";

const MovieDisplay=({selectMovie})=>{


    return (
        <div className="movie-display">
        {selectMovie!=null && (
          <div>
            <h1>{selectMovie.title}</h1>
            <p>{selectMovie.actor}</p>
            <p>{selectMovie.genre}</p>
            <p>{selectMovie.director}</p>
          </div>
        )}
      </div>
    )
}
export default MovieDisplay;