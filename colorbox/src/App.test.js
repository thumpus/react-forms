import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders without crashing', () => {
  render(<App />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})
