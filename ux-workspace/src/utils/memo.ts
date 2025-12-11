export function memoize<T extends (...args: unknown[]) => unknown>(fn: T) {
  const cache = new Map<string, ReturnType<T>>();
  return (...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key) as ReturnType<T>;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
