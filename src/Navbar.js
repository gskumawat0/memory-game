import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({onNewGame}) => (
  <header>
    <h2><a href='/'>Memory Game</a></h2>
    <nav>
      <li><p onClick={onNewGame}>New Game</p></li>
    </nav>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default Navbar;
