import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /software engineer \| ai & machine learning \| computer vision/i,
    })
  ).toBeInTheDocument();
});
