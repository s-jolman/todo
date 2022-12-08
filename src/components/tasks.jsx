import {
  useTodo,
  useTodosIds,
  useTodoToggle,
  useTodoRename,
} from '../hooks/useTodos.js';

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
