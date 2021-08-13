import React from "react";
import requests from "./requests";
import "./app.css";
import Row from "./row";
import Banar from "./Banar";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banar />
      <Row
        title="NETFLIX ORIGINELS"
        fetchUrl={requests.fetchNetflexOriginals}
        isLargeRow
      />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumetaries} />
    </div>
  );
}

export default App;
