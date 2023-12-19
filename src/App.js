import React,{useState} from "react";
import "./style.css";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";


const App = () => {
  const [selectMovie, setSelectMovie]=useState(null);


  return(
    <div>

<MovieList  updateSelectedValue={setSelectMovie}/>

<MovieDisplay selectMovie={selectMovie}/>

    </div>
  )
};

export default App;
