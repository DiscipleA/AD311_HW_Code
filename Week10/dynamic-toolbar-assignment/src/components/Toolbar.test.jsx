import { describe, expect, beforeEach, afterEach, test, vi } from 'vitest';
import { render, screen } from '../test/test-utils';
import userEvent from '@testing-library/user-event';
import Toolbar from './Toolbar';

describe('Toolbar', () => {
  beforeEach(() => {
    window.alert = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders all expected toolbar buttons from the data array', () => {
    render(<Toolbar />);

    expect(
      screen.getByRole('button', { name: /download file/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /share document/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /delete item/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /upload media/i })
    ).toBeInTheDocument();
  });

  test('each toolbar button triggers its own specific alert message', async () => {
    const user = userEvent.setup();

    render(<Toolbar />);

    await user.click(
      screen.getByRole('button', { name: /download file/i })
    );
    expect(window.alert).toHaveBeenLastCalledWith('Downloading!');

    await user.click(
      screen.getByRole('button', { name: /share document/i })
    );
    expect(window.alert).toHaveBeenLastCalledWith('Sharing!');

    await user.click(
      screen.getByRole('button', { name: /delete item/i })
    );
    expect(window.alert).toHaveBeenLastCalledWith('Deleting!');

    await user.click(
      screen.getByRole('button', { name: /upload media/i })
    );
    expect(window.alert).toHaveBeenLastCalledWith('Uploading!');
  });

  test('renders the toolbar heading and tab text', () => {
    render(<Toolbar />);

    expect(
      screen.getByRole('heading', { name: /toolbar/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/tools/i)).toBeInTheDocument();
  });
});