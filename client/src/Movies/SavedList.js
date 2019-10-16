import React from 'react';

import { Link } from 'react-router-dom';

const SavedList = props => {
  
  console.log(props)

  const routeToHome = event => {
    props.history.push('/');
  };

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} ><span className="saved-movie">{movie.title}</span></Link>
    ))}
    <div onClick={() => routeToHome()} className="home-button">Home</div>
  </div>
  
  );
}

export default SavedList;
