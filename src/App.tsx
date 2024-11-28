import { useState } from 'react';
import { Task } from './Types';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: taskName, isCompleted: false },
    ]);
  };

  return (
    <div>
      <h1>Todo Tasks</h1>
      <AddTask onAddTask={onAddTask} />
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
