/* eslint-disable react/prop-types */

import {
  useTodo,
  useTodosIds,
  useTodoToggle,
  useTodoRename,
} from '../hooks/useTodos.js';

export function Task({ id }) {
  const { name, title, done } = useTodo(id);
  const toggleDone = useTodoToggle(id);
  const changeTitle = useTodoRename(id);

  return (
    <li>
      <input
        type="checkbox"
        id={`task-done-${id}`}
        name={`task-done-${id}`}
        checked={done}
        onChange={toggleDone}
      />
      <input
        type="text"
        id={`task-title-${id}`}
        name={`task-title-${id}`}
        value={title}
        onChange={changeTitle}
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
