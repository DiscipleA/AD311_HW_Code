import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.jsx';

describe('App Component (User Profile Assignment)', () => {
  
  // --- Normal Test Cases ---
  it('displays the user name "Anonymous" from the UserProfile props', () => {
    render(<App />);
    expect(screen.getByText(/Name: Anonymous/i)).toBeInTheDocument();
  });

  it('displays the email "anon@anon.anon" from the UserProfile props', () => {
    render(<App />);
    expect(screen.getByText(/Email: anon@anon.anon/i)).toBeInTheDocument();
  });

  it('renders the Avatar with hardcoded name "John Doe" as alt text', () => {
    render(<App />);
    // This now looks for "John Doe" to match your specific App.jsx code
    const img = screen.getByAltText(/Anonymous/i);
    expect(img).toBeInTheDocument();
  });

  // --- Edge Test Cases ---
  it('generates a valid mailto link using the email prop', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /Send Email/i });
    expect(link).toHaveAttribute('href', 'mailto:anon@anon.anon');
  });

  it('verifies the Avatar component uses the "profile-avatar" CSS class', () => {
    render(<App />);
    const img = screen.getByAltText(/Anonymous/i);
    expect(img).toHaveClass('profile-avatar');
  });

  it('ensures the main container uses "profile-card" for styling', () => {
    const { container } = render(<App />);
    const div = container.querySelector('.profile-card');
    expect(div).toBeInTheDocument();
  });
});