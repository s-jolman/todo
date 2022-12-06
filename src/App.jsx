import './App.css';
import { TaskList } from './components/tasks';
import { TodosContext, useTodosListFromInput } from './hooks/useTodos.js';

function App() {
  const contextData = useTodosListFromInput([
    { id: 2, done: true, title: 'Make a to-do list item' },
    { id: 3, done: false, title: 'Make a to-do list of list items' },
  ]);
  return (
    <TodosContext.Provider value={contextData}>
      <TaskList />
    </TodosContext.Provider>
  );
}

export default App;
