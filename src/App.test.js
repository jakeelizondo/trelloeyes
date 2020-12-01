import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';

describe('App Component', () => {
  // smoke test

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={STORE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
