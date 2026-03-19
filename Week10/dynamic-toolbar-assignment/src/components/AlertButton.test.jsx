import { describe, expect, beforeEach, afterEach, test, vi } from 'vitest';
import { render, screen } from '../test/test-utils';
import userEvent from '@testing-library/user-event';
import AlertButton from './AlertButton';

describe('AlertButton', () => {
  beforeEach(() => {
    window.alert = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders the button text passed through children', () => {
    render(
      <AlertButton message="Downloading!">
        Download File
      </AlertButton>
    );

    expect(
      screen.getByRole('button', { name: /download file/i })
    ).toBeInTheDocument();
  });

  test('shows the correct alert message when clicked', async () => {
    const user = userEvent.setup();

    render(
      <AlertButton message="Sharing!">
        Share Document
      </AlertButton>
    );

    await user.click(
      screen.getByRole('button', { name: /share document/i })
    );

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Sharing!');
  });

  test('handles an empty message without crashing', async () => {
    const user = userEvent.setup();

    render(
      <AlertButton message="">
        Empty Message Button
      </AlertButton>
    );

    await user.click(
      screen.getByRole('button', { name: /empty message button/i })
    );

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('');
  });
});