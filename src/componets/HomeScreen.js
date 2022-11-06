import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./Requests";
function HomeScreen(props) {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Row title='Netflix Originals' fetchUrl={requests.fetechTrending} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetechTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetechTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetechActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetechComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetechHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetechRomanceMovies}/>
      <Row title='Documentries' fetchUrl={requests.fetechDocumentries}/>
    </div>
  );
}

export default HomeScreen;
