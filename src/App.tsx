import { useState } from 'react';
import { Task } from './Types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

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
      <TaskList header={<TaskListHeader>{tasks.length}</TaskListHeader>}>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
