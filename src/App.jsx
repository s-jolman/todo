import './App.css';
import { NewTask, MainTaskList } from './components/tasks';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { TodosContext, useTodosListFromInput } from './hooks/useTodos.js';
import { Button } from './components/button'


// TODO: install nanoid

function App() {
  const localData = useLocalStorage('todos', { id: 0, done: false, title: '' });
  const contextData = useTodosListFromInput([localData]);

  return (
    <TodosContext.Provider value={contextData}>
      <NewTask />
      <MainTaskList />
      <Button variant="default" type="button" onClick={
        () => console.log(JSON.stringify(contextData, null, 2))
      }>
        Log current list
      </Button>
    </TodosContext.Provider>
  );
}

export default App;
