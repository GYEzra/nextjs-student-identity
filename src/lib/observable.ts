function makeObservable<T>(target: T): {
  get: () => T;
  set: (newValue: T) => void;
  subscribe: (listenerFunc: (value: T) => void) => () => void;
} {
  let listeners: ((value: T) => void)[] = [];
  let value: T = target;

  function get(): T {
    return value;
  }

  function set(newValue: T): void {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((l) => l(value));
  }

  function subscribe(listenerFunc: (value: T) => void): () => void {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc);
  }

  function unsubscribe(listenerFunc: (value: T) => void): void {
    listeners = listeners.filter((l) => l !== listenerFunc);
  }

  return {
    get,
    set,
    subscribe,
  };
}
