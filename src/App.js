import React, {useState} from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Searchresults from './SearchResults';

function App() {
  
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  
  async function searchSuperHeros(searchTerm){
    let response = await fetch(`https://www.superheroapi.com/api.php/3379905258763762/search/${searchTerm}`)
    const data = await response.json();
    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if(!searchTerm.length)
      setSuperheroData([]);
      
    if(searchTerm.length > 3) {
      searchSuperHeros(searchTerm);
    } 
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange}/>
        <Searchresults superheroData={superheroData}/>  
      </div>
    </div>
  );
}

export default App;
