import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Titre from './Composants/titre'
import BasDePage from './Composants/BasDePage';
import Gameboard from './Composants/Gameboard'

ReactDOM.render(
  <div>
    <Titre />
    <Gameboard />
    <BasDePage />
  </div>
 ,
  document.getElementById('root')
);


