import { describe, expect, beforeEach, test, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toolbar from '../src/Toolbar';

describe('Toolbar component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('renders all expected toolbar buttons', () => {
    render(<Toolbar />);

    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /upload/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
  });

  test('clicking Play triggers the correct alert', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Toolbar />);

    await user.click(screen.getByRole('button', { name: /play/i }));

    expect(alertMock).toHaveBeenCalledWith('Playing music!');
  });

  test('clicking Upload triggers the correct alert', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Toolbar />);

    await user.click(screen.getByRole('button', { name: /upload/i }));

    expect(alertMock).toHaveBeenCalledWith('Uploading file!');
  });

  test('clicking Share triggers the correct alert', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Toolbar />);

    await user.click(screen.getByRole('button', { name: /share/i }));

    expect(alertMock).toHaveBeenCalledWith('Sharing content!');
  });

  test('renders the sidebar title', () => {
    render(<Toolbar />);

    expect(screen.getByText(/quick actions/i)).toBeInTheDocument();
  });

  test('renders the visible menu handle text', () => {
    render(<Toolbar />);

    expect(screen.getByText(/menu/i)).toBeInTheDocument();
  });
});