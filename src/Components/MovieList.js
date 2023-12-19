import React from "react";
import MoviesData from "../Data/MoviesData"


const MovieList = ({updateSelectedValue}) => {

   


  return (
    <div className="movie-list">
      {
      MoviesData.map((item) => (
        <p onClick={()=>updateSelectedValue(item)}>{item.title}</p>
      ))
      }
      
      
    </div>
  
   
  );
};

export default MovieList;
