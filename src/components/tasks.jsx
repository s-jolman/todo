import {
  useCallback, useState,
} from 'react';
import {
  useTodo,
  useTodosIds,
  useTodoToggle,
  useTodoRename,
  addNewTodo,
} from '../hooks/useTodos.js';
import {
  Button
} from './button'

export function NewTask() {
  const [valueData, setValueData] = useState({
    title: '',
    disabled: true,
  });

  const handleOnInputChange = useCallback(
    ({ target: { value } }) => {
      setValueData({
        ...valueData,
        title: value,
        disabled: value ? false : true,
      });

    },
    [valueData, setValueData],
  );

  return (
    <div>
      <input
        type="text"
        id="newTitle"
        name="newTitle"
        value={valueData.title}
        placeholder="New task"
        onChange={handleOnInputChange}
      />
      <Button
        type="button"
        id="newBtn"
        onClick={addNewTodo(valueData.title)}
        disabled={valueData.disabled}
      >
        +
      </Button>
    </div>
  );
}

export function Task({ id }) {
  const { title, done } = useTodo(id);
  const toggleDone = useTodoToggle(id);
  const renameTitle = useTodoRename(id);

  return (
    <li className='taskListItem'>
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
        className='taskListItem__title'
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
    <ul className='taskList'>
      {listItems}
    </ul>
  );
}
