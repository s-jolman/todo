import {
  createContext, useCallback, useContext, useState,
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
      console.log('toggleDone-' + id);
    },
    [setItemsMap],
  );
  const changeTitle = useCallback(
    (id) => {
      setItemsMap(
        (prevItems) => ({
          ...prevItems,
          [id]: {
            ...prevItems[id],
            title: prevItems[id].title,
          },
        }),
      );
      console.log('changeTitle-' + id);
    },
    [setItemsMap],
  );
  return {
    items: itemsMap,
    toggleDone,
    changeTitle,
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
    [toggleDone, id.done],
  );
  return todoToggle;
};

export const useTodoRename = (id) => {
  const { changeTitle } = useContext(TodosContext);
  const todoRename = useCallback(
    () => changeTitle(id),
    [changeTitle, id.title],
  );
  return todoRename;
};
