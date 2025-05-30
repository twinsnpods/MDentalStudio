// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Motlokwa Dental Studio text', () => {
  render(<App />);
  expect(screen.getByText(/Motlokwa Dental Studio/i)).toBeInTheDocument();
});
