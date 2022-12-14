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
  // TODO: This                         --\/--
  // const [itemsMap, setItemsMap] = useLocalStorage(
  //   'todos',
  //   listToObject(input),
  // );
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
    (id) => ({ target: { value } }) => {
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
  const addTodo = useCallback(
    (newTitle) => {
      setItemsMap(
        (prevItems) => {
          const maxId = Number(Object.keys(prevItems).reduce((a, b) => prevItems[a] > prevItems[b] ? a : b)) + 1;
          return ({
            ...prevItems,
            [maxId]: {
              id: maxId,
              done: false,
              title: newTitle,
            },
          })
        },
      );
    },
    [setItemsMap],
  );
  return {
    items: itemsMap,
    toggleDone,
    renameTitle,
    addTodo,
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

export const addNewTodo = (title) => {
  const { addTodo } = useContext(TodosContext);
  const newTodo = useCallback(
    () => addTodo(title),
    [addTodo, title],
  );
  return newTodo;
};
