import {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [multiplier] = useState(2);
  const doubleCount = useMemo(
    () => count * multiplier,
    [count, multiplier],
  );

  const increment = useCallback(
    () => setCount((c) => c + 1),
    [setCount],
  );

  const decrement = useCallback(
    () => setCount((c) => c - 1),
    [setCount],
  );

  // effects happen after render of react DOM
  useEffect(
    // do
    () => {
      document.title = count;
    },
    // when (on change)
    [count],
  );

  return (
    <div>
      <button
        type="button"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={decrement}
      >
        Decrement
      </button>
      <p>{`Count: ${count}`}</p>
      <p>{`Double Count: ${doubleCount}`}</p>
    </div>
  );
}
