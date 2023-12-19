// import React, { useState } from "react";
// import "./style.css";

// const moviesData = [
//   {
//     title: "3 Idiots",
//     actor: "Aamir Khan",
//     genre: "Comedy/Drama",
//     director: "Rajkumar Hirani",
//   },
//   {
//     title: "Dangal",
//     actor: "Aamir Khan",
//     genre: "Biographical/Sports",
//     director: "Nitesh Tiwari",
//   },
//   {
//     title: "Bahubali: The Beginning",
//     actor: "Prabhas",
//     genre: "Action/Fantasy",
//     director: "S.S. Rajamouli",
//   },
//   {
//     title: "Lagaan",
//     actor: "Aamir Khan",
//     genre: "Drama/Sports",
//     director: "Ashutosh Gowariker",
//   },
//   {
//     title: "PK",
//     actor: "Aamir Khan",
//     genre: "Comedy/Drama",
//     director: "Rajkumar Hirani",
//   },
//   {
//     title: "Sholay",
//     actor: "Amitabh Bachchan",
//     genre: "Action/Adventure",
//     director: "Ramesh Sippy",
//   },
//   {
//     title: "Bajrangi Bhaijaan",
//     actor: "Salman Khan",
//     genre: "Drama/Action",
//     director: "Kabir Khan",
//   },
//   {
//     title: "Gully Boy",
//     actor: "Ranveer Singh",
//     genre: "Musical/Drama",
//     director: "Zoya Akhtar",
//   },
//   {
//     title: "Queen",
//     actor: "Kangana Ranaut",
//     genre: "Comedy/Drama",
//     director: "Vikas Bahl",
//   },
//   {
//     title: "Andhadhun",
//     actor: "Ayushmann Khurrana",
//     genre: "Thriller/Comedy",
//     director: "Sriram Raghavan",
//   },
// ];
// const App = () => {
//   const [selectMovie, setSelectMovie] = useState("");
//   function showDetails(movie) {
//     setSelectMovie(movie);
//   }
//   return (
//     <div>
//       <div className="movie-list">
//         {moviesData.map((item) => (
//           <p onClick={() => showDetails(item)}>{item.title}</p>
//         ))}
//       </div>
//       <div className="movie-display">
//         {selectMovie!="" && (
//           <div>
//             <h1>{selectMovie.title}</h1>
//             <p>{selectMovie.actor}</p>
//             <p>{selectMovie.genre}</p>
//             <p>{selectMovie.director}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
