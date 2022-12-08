import {
  useTodo,
  useTodosIds,
  useTodoToggle,
  useTodoRename,
} from '../hooks/useTodos.js';

export function NewTask() {
  const addTodo = () => {
    let max = Math.max(...arr);
  }

  // new component for adding a new todo
  // it should have an input and button
  // button should be disabled if input is empty (state empty)
  // hook/context should only have an addTodo function that receives a string (title)

  return (
    <button type="button" onClick={addTodo}>New task</button>
  );
}

export function Task({ id }) {
  const { title, done } = useTodo(id);
  const toggleDone = useTodoToggle(id);
  const renameTitle = useTodoRename(id);

  return (
    <li>
      <input
        type="checkbox"
        id={`${id}-done`}
        name="done"
        checked={done}
        onChange={toggleDone}
      />
      <input
        type="text"
        id={`${id}-title`}
        name="title"
        value={title}
        onChange={renameTitle}
      />
    </li>
  );
}

export function TaskList() {
  const ids = useTodosIds();
  // object entries turns object to array to be used in array functions
  // must create array in map that shows key value pair
  const listItems = ids.map((id) => (
    <Task key={id} id={id} />
  ));
  return (
    <ul>
      {listItems}
    </ul>
  );
}
