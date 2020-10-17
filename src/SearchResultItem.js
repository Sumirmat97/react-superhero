import React from 'react';

function SearchResultItem(props) {

  const {data} = props;
  return (
    <div className="search-result">
        <div className="left">
          <img src={data.image.url} alt="super pic"/>
        </div>
        <div className="right">
        <h3>{data.name}</h3>
        <div style={{ color:'gray', marginBottom: 12 }}>{data.biography['full-name']}</div>  
        <div className="stats">
            <div>Strength: {data.powerstats.strength || 'unavailable'}</div>
            <div>Speed: {data.powerstats.speed || 'unavailable'}</div>
            <div>Power: {data.powerstats.power || 'unavailable'}</div>
        </div>
        </div>
    </div>
  );
}

export default SearchResultItem;
