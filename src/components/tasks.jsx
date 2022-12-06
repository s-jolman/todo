/* eslint-disable react/prop-types */

import { useTodo, useTodosIds, useTodoToggle } from '../hooks/useTodos.js';

export function Task({ id }) {
  const { name, title, done } = useTodo(id);
  const toggleDone = useTodoToggle(id);
  return (
    <li>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={done}
          onChange={toggleDone}
        />
        {title}
      </label>
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
