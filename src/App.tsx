import React from 'react';
import MovieSearchBlock from './components/MovieSearchBlock';
import { globalFunctions } from './constants';
import './App.scss';

function App() {
  const clickHandler = (e: any) => {
    if(!e.target.classList.contains('select__opt')&&!e.target.classList.contains('select__wrp'))globalFunctions.closeSelect();
    
}
  return (
    <div className="App" onMouseUp={clickHandler}>
      <MovieSearchBlock />
    </div>
  );
}

export default App;
