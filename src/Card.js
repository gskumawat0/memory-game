import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css'

const Card = (props) => {
  let style = {height: '140px', width: '140px',padding: '10px', margin: '5px', backgroundColor:'grey'};
  if (props.showing) {
    style.backgroundColor = props.backgroundColor;
  }
  return (
    <div
      onClick={props.onClick}
      className="card-container"
      style={style}
    />
  );
};

Card.propTypes = {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;