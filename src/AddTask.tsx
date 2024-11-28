import { useState } from 'react';

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = useState<string>('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimTaskName = taskName.trim();
    if (!trimTaskName) return;
    onAddTask(trimTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input" className="sr-only">
        Add Task:
      </label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        id="task-input"
      />
      <button>Add</button>
    </form>
  );
}
