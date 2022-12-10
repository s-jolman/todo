import './App.css';
import { NewTask, TaskList } from './components/tasks';
import { TodosContext, useTodosListFromInput } from './hooks/useTodos.js';


// TODO: install nanoid

function App() {
  const contextData = useTodosListFromInput([
    { id: 2, done: true, title: 'Make a to-do list item' },
    { id: 3, done: false, title: 'Make a to-do list of list items' },
  ]);

  return (
    <TodosContext.Provider value={contextData}>
      <NewTask />
      <TaskList />
      <button type="button" onClick={
        () => console.log(JSON.stringify(contextData, null, 2))
      }>
        Log current list
      </button>
    </TodosContext.Provider>
  );
}

export default App;
