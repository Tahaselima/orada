import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

it('button component click event is correct work', (done) => {
  function handleClick() {
    done();
  }

  const { getByTestId } = render(
    <button data-testid="test-button" onClick={handleClick}>Tıkla!</button>
  );

  const node = getByTestId("test-button");

  fireEvent.click(node);
})

test('renders button component with props', () => {
  const { asFragment } = render(<button id="textButton" className="btn">Taha Selim!</button>);
  expect(asFragment()).toMatchSnapshot()
});

afterEach(cleanup);