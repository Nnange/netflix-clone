import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="app">

      {/* Nav */}
      <Banner />


      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />    
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />    
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />    
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />    
      <Row title="Horrow Movies" fetchUrl={requests.fetchHorrorMovies} />    
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />    
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />   

    </div>
  );
}

export default App;
