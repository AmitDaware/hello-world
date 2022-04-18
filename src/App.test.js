import { render, screen } from '@testing-library/react';
import App from './App';

test('Multi Millionair PlayBoy', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Tony a.k.a IronMan/i);
  expect(linkElement).toBeInTheDocument();
});

hi gaurav daware ur awesome