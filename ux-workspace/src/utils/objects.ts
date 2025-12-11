export function omit<T extends Record<string, unknown>>(obj: T, keys: (keyof T)[]) {
  const clone = { ...obj } as T;
  keys.forEach((key) => delete clone[key]);
  return clone;
}
