import {
  createContext, useCallback, useContext, useState,
} from 'react';

/* eslint-disable no-restricted-syntax */
const listToObject = (list) => {
  const object = {};
  for (const item of list) {
    object[item.id] = item;
  }
  return object;
};

export const TodosContext = createContext();

export const useTodosListFromInput = (input) => {
  const [itemsMap, setItemsMap] = useState(
    listToObject(input),
  );
  const toggleDone = useCallback(
    (id) => {
      setItemsMap(
        (prevItems) => ({
          ...prevItems,
          [id]: {
            ...prevItems[id],
            done: !prevItems[id].done,
          },
        }),
      );
    },
    [setItemsMap],
  );
  return {
    items: itemsMap,
    toggleDone,
  };
};

export const useTodosIds = () => (
  Object.keys(useContext(TodosContext).items)
);

export const useTodo = (id) => (
  useContext(TodosContext).items[id]
);

export const useTodoToggle = (id) => {
  const { toggleDone } = useContext(TodosContext);
  const onChange = useCallback(
    () => toggleDone(id),
    [toggleDone, id],
  );
  return onChange;
};
