import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  // console.log(props);
  // console.log(props.store.lists);
  let Lists = props.store.lists.map((list, i) => {
    let ids = list.cardIds;
    // console.log(ids);
    let allCards = Object.values(props.store.allCards);
    // console.log(allCards);
    let targetCards = allCards.filter((card) => ids.includes(card.id) === true);
    // console.log(targetCards);
    return <List key={i} header={list.header} cards={targetCards} />;
  });

  // console.log(Lists);

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{Lists}</div>
    </main>
  );
}

export default App;
