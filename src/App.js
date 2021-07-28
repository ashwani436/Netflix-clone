import React from 'react'
import Row from './Row';
import requests from './requests';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';

 const App = () => {
  return (
    <div className="App">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
       <Banner/>
      <h1>Netflix Clone Front-end</h1>
      <Row title="NETFLIX ORIGNALS" fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>

      
    </div>
  )
}
export default App;