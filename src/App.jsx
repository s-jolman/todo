import './App.css';
import { TaskList } from './components/tasks';

function App() {
  const items = [
    { id: 1, state: 1, title: 'Make a to-do list item' },
    { id: 2, state: 0, title: 'Make a to-do list of list items' },
  ];
  return (
    <TaskList items={items} />
  );
}

export default App;
