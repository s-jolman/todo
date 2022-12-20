import {
  useCallback, useState, useMemo
} from 'react';
import {
  useTodo,
  useTodosIds,
  useTodoToggle,
  useTodoRename,
  useAddTodo,
} from '../hooks/useTodos.js';
import { Button } from './button';
import { Input, CheckBox } from './input';
import { TaskList, TaskListItem } from './taskList';

export function NewTask() {
  const [valueData, setValueData] = useState('');

  const handleOnInputChange = useCallback(
    ({ target: { value } }) => {
      setValueData(value);
    },
    [valueData, setValueData],
  );

  const addNewTodo = useAddTodo();
  const handleOnInputSubmit = useCallback(
    () => {
      addNewTodo(valueData);
      setValueData('');
    },
    [valueData, setValueData],
  );

  const isDisabled = useMemo(
    () => valueData.length === 0,
    [valueData.length]
  );

  return (
    <form>
      <Input
        type="text"
        id="newTitle"
        name="newTitle"
        value={valueData}
        placeholder="New task"
        onChange={handleOnInputChange}
      />
      <Button
        type="submit"
        id="newBtn"
        onClick={handleOnInputSubmit}
        disabled={isDisabled}
      >
        +
      </Button>
    </form>
  );
}

export function Task({ id }) {
  const { title, done } = useTodo(id);
  const toggleDone = useTodoToggle(id);
  const renameTitle = useTodoRename(id);

  return (
    <TaskListItem>
      <CheckBox
        type="checkbox"
        id={`${id}-done`}
        name="done"
        checked={done}
        onChange={toggleDone}
      />
      <Input
        type="text"
        id={`${id}-title`}
        name="title"
        value={title}
        onChange={renameTitle}
      />
    </TaskListItem>
  );
}

export function MainTaskList() {
  const ids = useTodosIds();
  // object entries turns object to array to be used in array functions
  // must create array in map that shows key value pair
  const listItems = ids.map((id) => (
    <Task key={id} id={id} />
  ));
  return (
    <TaskList>
      {listItems}
    </TaskList>
  );
}
