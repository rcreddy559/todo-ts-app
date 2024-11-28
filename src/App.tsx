import { useState } from 'react';

type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', isCompleted: false },
    { id: 2, title: 'Learn Java', isCompleted: false },
  ]);
  const [taskName, setTaskName] = useState<string>('');
  const onAddTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: taskName, isCompleted: false },
    ]);
  };
  return (
    <div>
      <h1>Todo Tasks</h1>
      <label htmlFor="task-input" className="sr-only">
        Add Task:
      </label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        id="task-input"
      />
      <button onClick={onAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
