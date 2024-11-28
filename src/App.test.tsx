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
  test('should remove task from list when add button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const addBtn = screen.getByRole('button', { name: 'Add' });
    const taskName = 'Learn Rust lang';

    await user.type(input, taskName);
    await user.click(addBtn);
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  test('should not add empty task to list', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const addBtn = screen.getByRole('button', { name: 'Add' });
    const taskName = '   ';

    await user.type(input, taskName);
    await user.click(addBtn);
    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
  test('should add a task by pressing the enter key', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });

    await user.type(input, 'Learn Rust lang{enter}');
    await waitFor(() => {
      expect(screen.getByText('Learn Rust lang')).toBeInTheDocument();
    });
  });
});
