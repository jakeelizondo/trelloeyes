import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  let Cards = props.cards.map((card, i) => {
    return <Card key={i} header={card.title} content={card.content} />;
  });

  return (
    <section className="List">
      <header className="List-header" id={props.id}>
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {Cards}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
