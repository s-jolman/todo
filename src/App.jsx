import './App.css';
import { NewTask, TaskList } from './components/tasks';
import { TodosContext, useTodosListFromInput } from './hooks/useTodos.js';
import { Button } from './components/button'


// TODO: install nanoid

function App() {
  const contextData = useTodosListFromInput([
    { id: 200, done: true, title: '1 - Make a to-do list item' },
    { id: 2, done: false, title: '2 - Make a to-do list of list items' },
  ]);

  return (
    <TodosContext.Provider value={contextData}>
      <NewTask />
      <TaskList />
      <Button variant="default" type="button" onClick={
        () => console.log(JSON.stringify(contextData, null, 2))
      }>
        Log current list
      </Button>
    </TodosContext.Provider>
  );
}

export default App;
