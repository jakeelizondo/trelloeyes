import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.handleDelete(props.id)}>
        delete
      </button>
      <h3>{props.header}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
