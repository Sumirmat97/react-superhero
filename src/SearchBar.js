import React from 'react';

function SearchBar(props) {
  
  const {handleChange, searchText} = props;
  return (
    <div >
        <input 
          id="search-bar" 
          type="search" 
          placeholder="Hunt superheros here"
          onChange={ handleChange }
          value={searchText}
          />
    </div>
  );
}

export default SearchBar;
