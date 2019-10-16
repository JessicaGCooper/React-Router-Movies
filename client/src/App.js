import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path='/' render={props => <SavedList list={savedList} {...props} />} />
      <Route exact path='/'  render={props => <MovieList {...props} />} />
      <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;

