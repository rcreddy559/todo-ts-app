import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('should render input field and add button', async () => {
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const addBtn = screen.getByRole('button', { name: 'Add' });
    expect(input).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
  });

  test('should add task to list when add button is clickes', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const addBtn = screen.getByRole('button', { name: 'Add' });
    const taskName = 'Learn Rust lang';

    await user.type(input, taskName);
    await user.click(addBtn);
    await waitFor(() => {
      expect(screen.getByText(taskName)).toBeInTheDocument();
    });
  });
});
