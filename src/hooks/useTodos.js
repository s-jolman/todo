import {
  createContext, useCallback, useContext, useState, useMemo,
} from 'react';

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

  const renameTitle = useCallback(
    (id) => ({ target: { value } } /* change event */) => {
      setItemsMap(
        (prevItems) => ({
          ...prevItems,
          [id]: {
            ...prevItems[id],
            title: value,
          },
        }),
      );
    },
    [setItemsMap],
  );
  return {
    items: itemsMap,
    toggleDone,
    renameTitle,
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
  const todoToggle = useCallback(
    () => toggleDone(id),
    [toggleDone, id],
  );
  return todoToggle;
};

export const useTodoRename = (id) => {
  const { renameTitle } = useContext(TodosContext);
  const todoRename = useMemo(
    () => renameTitle(id),
    [renameTitle, id],
  );
  return todoRename;
};
