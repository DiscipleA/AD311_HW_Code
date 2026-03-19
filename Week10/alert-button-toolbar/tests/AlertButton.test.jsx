import { describe, expect, beforeEach, test, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlertButton from '../src/AlertButton';

describe('AlertButton component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('renders the button with children text', () => {
    render(
      <AlertButton message="Playing music!">
        Play
      </AlertButton>
    );

    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
  });

  test('calls alert with the correct message when clicked', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <AlertButton message="Playing music!">
        Play
      </AlertButton>
    );

    await user.click(screen.getByRole('button', { name: /play/i }));

    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Playing music!');
  });

  test('renders numeric children correctly', () => {
    render(<AlertButton message="Number button">{123}</AlertButton>);

    expect(screen.getByRole('button', { name: '123' })).toBeInTheDocument();
  });

  test('handles empty string message', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <AlertButton message="">
        Empty Message
      </AlertButton>
    );

    await user.click(screen.getByRole('button', { name: /empty message/i }));

    expect(alertMock).toHaveBeenCalledWith('');
  });

  test('handles missing children without crashing', () => {
    render(<AlertButton message="No label" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEmptyDOMElement();
  });

  test('handles special characters in message', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const specialMessage = 'Upload failed: file size > 10MB & name contains #';

    render(
      <AlertButton message={specialMessage}>
        Upload
      </AlertButton>
    );

    await user.click(screen.getByRole('button', { name: /upload/i }));

    expect(alertMock).toHaveBeenCalledWith(specialMessage);
  });
});