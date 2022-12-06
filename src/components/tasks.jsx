import {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

export function Task(props) {
  const [id, state, title] = props;
  const [done, setDone] = useState(state);
  const name = `task ${id}`;

  const taskDone = useCallback(
    () => setDone((c) => (c === 0 ? 1 : 0)),
    [setDone],
  );

  return (
    <li key={id}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={done}
          onChange={taskDone}
        />
        {title}
      </label>
    </li>
  );
}

export function TaskList(props) {
  const [items] = props;
  const listItems = items.map((item) => <Task props={item} />);
  return (
    <ul>
      {listItems}
    </ul>
  );
}
