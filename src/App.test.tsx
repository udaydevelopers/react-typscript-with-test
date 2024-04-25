// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders 404 page for unknown route', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Navigate to a non-existent route
  window.history.pushState({}, 'Test page', '/non-existent-route');

  // Check if the 404 message is rendered
  const errorMessage = screen.getByText(/404 - Page Not Found/i);
  expect(errorMessage).toBeInTheDocument();
});
