import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  // smoke test

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card header="First Card" content="lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
