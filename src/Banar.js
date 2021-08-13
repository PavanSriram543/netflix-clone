import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./banner.css";

function Banar({ fetchUrl }) {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflexOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_button">
          <button className="banner_buttons">play</button>{" "}
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="discription">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="fadeBottom"></div>
    </header>
  );
}

export default Banar;
