import logo from './images/image4.png';
import './App.css';
import React, {useState, useEffect} from 'react'
import Cards from './components/Cards';
import Buttons from './components/Buttons/Buttons';

let url = "https://rickandmortyapi.com/api/character";
let nextUrl = null;
let prevUrl = null;

function App() {

  const [characters, setCharacters] = useState([]);
  


  const fetchCharacterData = (url) => {
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {
      console.log(data);
  nextUrl = data.info.next;
prevUrl = data.info.prev;
      setCharacters(data.results)})
    .catch(error => 
      console.error('Error fetching character data:', error)
      );
  };
        useEffect(() => {
          fetchCharacterData(url);
        }, []);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <main>
        <Cards allData={characters} />
<Buttons nextUrl={nextUrl} prevUrl={prevUrl} fetchCharacterData={fetchCharacterData}/>
      </main>
    </div>
  );
}

export default App;
