import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  let Cards = props.cards.map((card, i) => {
    return (
      <Card
        key={i}
        id={card.id}
        header={card.title}
        content={card.content}
        handleDelete={props.handleDelete}
      />
    );
  });

  return (
    <section className="List">
      <header className="List-header" id={props.id}>
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {Cards}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.addRandom(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
