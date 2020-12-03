import React from 'react';
import List from './List';
import './App.css';

function omit(obj, keyToOmit) {
  console.log(Object.entries(obj));
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

const newRandomCard = () => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  };
};

class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
        ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm'],
      },
    ],
    allCards: {
      a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
      b: { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      c: { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      d: { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      e: { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      f: { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      g: { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      h: { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      i: { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      j: { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      k: { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      l: { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      m: { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  };

  handleDelete = (id) => {
    console.log(`trying to delete card ${id}`);

    let newLists = this.state.lists.map((list) => {
      let newCards = list.cardIds.filter((letter) => letter !== id);

      list.cardIds = newCards;

      return list;
    });

    let newCards = omit(this.state.allCards, id);

    this.setState({
      lists: newLists,
      allCards: newCards,
    });
  };

  addRandom = (id) => {
    console.log(`trying to add random card to list ${id}`);

    //generate random card
    let newCard = newRandomCard();

    // make new lists array referencing random card id
    let newLists = this.state.lists.map((list) => {
      if (list.id === id) {
        list.cardIds.push(newCard.id);
        return list;
      } else {
        return list;
      }
    });

    // add new card to allCards in state
    // set lists to be new lists array so it can pick up the new card from allCards
    this.setState({
      allCards: { ...this.state.allCards, [newCard.id]: newCard },
      lists: newLists,
    });
  };

  render() {
    // console.log(props);
    // console.log(props.store.lists);
    let Lists = this.state.lists.map((list, i) => {
      let ids = list.cardIds;
      // console.log(ids);
      let allCards = Object.values(this.state.allCards);
      // console.log(allCards);
      let targetCards = allCards.filter(
        (card) => ids.includes(card.id) === true
      );
      // console.log(targetCards);
      return (
        <List
          key={i}
          id={list.id}
          header={list.header}
          cards={targetCards}
          handleDelete={this.handleDelete}
          addRandom={this.addRandom}
        />
      );
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{Lists}</div>
      </main>
    );
  }
}
export default App;
